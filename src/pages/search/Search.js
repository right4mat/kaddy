import React from "react";
import Carousel from "react-multi-carousel";
import { unsplash, collections } from "../../service/unsplash";
import { useParams } from "react-router-dom";
//css imports
import shared from "../sharedStyle/Style.module.css";
import classes from "./Search.module.css";
import "react-multi-carousel/lib/styles.css";
//comp imports
import Product from "../../components/product/Product";
import Loading from "../../components/loading/Loading";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Search() {
  const [SearchArr, setSearchArr] = React.useState([]);
  const { search, name } = useParams();
  const [oldSearch, setOldSearch] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (search !== oldSearch) {
        setLoading(true)
      unsplash.search
        .photos(search, 1, 30, {
          orientation: "landscape",
          collections: collections,
        })
        .then((toJson) => toJson.json())
        .then((json) => {
          setSearchArr(json.results);
          setLoading(false)
        });
      setOldSearch(search);
    }
  });

  return (
    <div className={shared.Page}>
      <div className={classes.Home}>
        <div className={classes.Type}>
          <h1 className={classes.Header}>{name}</h1>
          <hr className={classes.Hr} />
          <div className={classes.Results}>
            {loading ? (
              <Loading />
            ) : (
              SearchArr.map((x) => (
                <Product
                  key={x.id}
                  id={x.id}
                  img={x.urls.regular}
                  brand={search}
                  details={x.alt_description}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
