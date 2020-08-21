import React from "react";
import { unsplash } from "../../service/unsplash";
import { useParams } from "react-router-dom";
import Context from "../../context/Context";
//css imports
import classes from "../sharedStyle/Style.module.css";
import searches from "./Search.module.css";
import "react-multi-carousel/lib/styles.css";
//comp imports
import Product from "../../components/product/Product";
import Loading from "../../components/loading/Loading";

function Search() {
  const { filter } = React.useContext(Context);
  const [SearchArr, setSearchArr] = React.useState([]);
  const { search } = useParams();
  const [oldSearch, setOldSearch] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [oldPage, setOldPage] = React.useState(1);
  const [oldFilter, setOldFilter] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + 30);
      }
    });
    if (search !== oldSearch) {
      setLoading(true);
      setSearchArr([]);
      unsplash.search
        .photos(
          search,
          page,
          page + 30,
          {
            orientation: "landscape",
          },
          filter
        )
        .then((toJson) => toJson.json())
        .then((json) => {
          if(json.results.length)
            setSearchArr(json.results);
          else
            setSearchArr([]);
          setLoading(false);
        })
        .catch((err) => {
          alert("oops something went wrong");
        });
      setOldSearch(search);
    }
    if (page !== oldPage) {
      setLoading(true);
      unsplash.search
        .photos(
          search,
          page,
          page + 30,
          {
            orientation: "landscape",
          },
          filter
        )
        .then((toJson) => toJson.json())
        .then((json) => {
          console.log(json);
          if(json.results.length)
            setSearchArr(SearchArr.concat(json.results));
          else
            setSearchArr([]);
          setLoading(false);
        })
        .catch((err) => {
          alert("oops something went wrong");
        });

      setOldPage(page);
    }
  }, [search, oldSearch, page, oldPage, filter, oldFilter]);

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

export default Search;
