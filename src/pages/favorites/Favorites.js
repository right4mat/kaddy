import React from "react";
import Carousel from "react-multi-carousel";
import Context from "../../context/Context";
import { unsplash } from "../../service/unsplash";
//css imports
import classes from "../sharedStyle/Style.module.css";
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
    breakpoint: { max: 1024, min: 552 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 552, min: 0 },
    items: 1,
  },
};

function Favorites() {
  const { favorites } = React.useContext(Context);
  const [favoritesArr, setFavoritesArr] = React.useState([]);
  const [favoritesOld, setFavoritesOld] = React.useState(0);
  const [loading, setLoading] = React.useState(Object.keys(favorites).length);

  React.useEffect(() => {
    if (Object.keys(favorites).length !== favoritesOld) {
      setFavoritesArr([]); //clear so old favs can be removed
      Object.keys(favorites).forEach((id) => {
        setLoading(true);
        unsplash.photos
          .getPhoto(id)
          .then((toJson) => toJson.json())
          .then((json) => {
            setFavoritesArr((oldArray) => [...oldArray, json]);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            alert("oops something went wrong");
          });
      });

      setFavoritesOld(Object.keys(favorites).length);
    }
  }, [favorites, favoritesOld]);

  return (
    <div className={classes.Page}>
      <div className={classes.Inner}>
        {loading ? (
          <Loading />
        ) : (
          <div className={classes.Type}>
            <h1 className={classes.Header}>Your Favorites</h1>
            <hr className={classes.Hr} />
            <Carousel responsive={responsive} containerClass={classes.Carousel}>
              {favoritesArr.map((x) => (
                <Product
                  key={x.id}
                  id={x.id}
                  img={x.urls.regular}
                  brand={"Brand name"}
                  details={x.alt_description}
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
