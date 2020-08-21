import React from "react";
import { unsplash, collections } from "../../service/unsplash";
import Context from "../../context/Context";
//css imports
import classes from "../sharedStyle/Style.module.css";
import searches from "./Home.module.css";
import "react-multi-carousel/lib/styles.css";
//comp imports
import Product from "../../components/product/Product";
import Loading from "../../components/loading/Loading";

function Home() {
  const { filter } = React.useContext(Context);
  const [SearchArr, setSearchArr] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [oldPage, setOldPage] = React.useState(0);
  const [oldFilter, setOldFilter] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + 30);
      }
    });
    if (filter !== oldFilter) {
      setSearchArr([]);
    }
    if (page !== oldPage || filter !== oldFilter) {
      setLoading(true);
      unsplash.photos
        .listPhotos(
          page,
          page + 30,
          {
            orientation: "landscape",
          },
          filter
        )
        .then((toJson) => toJson.json())
        .then((json) => {
          setSearchArr(SearchArr.concat(json));
          setLoading(false);
        })
        .catch((err) => {
          alert("oops something went wrong");
        });

      setOldPage(page);
      setOldFilter(filter);
    }
  }, [page, oldPage, filter, oldFilter]);

  return (
    <div className={classes.Page}>
      <div className={classes.Inner}>
        <div className={classes.Type}>
          <div className={searches.Results}>
            {SearchArr.map((x) => (
              <Product
                key={x.id}
                id={x.id}
                img={x.urls.regular}
                alt={x.alt_description}
                details={x.description}
              />
            ))}
            
          </div>
          {loading ? <Loading /> : false}
        </div>
      </div>
    </div>
  );
}

export default Home;
