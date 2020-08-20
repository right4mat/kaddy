import React from "react";
import { unsplash, collections } from "../../service/unsplash";
import { useParams } from "react-router-dom";
//css imports
import classes from "../sharedStyle/Style.module.css";
import searches from "./Search.module.css";
import "react-multi-carousel/lib/styles.css";
//comp imports
import Product from "../../components/product/Product";
import Loading from "../../components/loading/Loading";




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
        }).catch(err => {
          alert("oops something went wrong")
        })
      setOldSearch(search);
    }
  });

  return (
    <div className={classes.Page}>
      <div className={classes.Inner}>
        <div className={classes.Type}>
          <h1 className={classes.Header}>{name}</h1>
          <hr className={classes.Hr} />
          <div className={searches.Results}>
            {loading ? (
              <Loading />
            ) : (
              SearchArr.map((x) => (
                <Product
                  key={x.id}
                  id={x.id}
                  img={x.urls.regular}
                  brand={"Brand name"}
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
