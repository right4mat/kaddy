import React from "react";
import Carousel from "react-multi-carousel";
import { unsplash, collections } from "../../service/unsplash";
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

function Home() {
  const [beer, setBeer] = React.useState([]);
  const [wine, setWine] = React.useState([]);
  const [spirit, setSpirit] = React.useState([]);

  React.useEffect(() => {
    unsplash.search
      .photos(
        "Wine",
        1,
        10,
        { orientation: "landscape", collections: collections },
        "popular"
      )
      .then((toJson) => toJson.json())
      .then((json) => {
        setWine(json.results);
      }).catch(err => {
        alert("oops something went wrong")
      })

    unsplash.search
      .photos(
        "Beer",
        1,
        10,
        { orientation: "landscape", collections: collections },
        "popular"
      )
      .then((toJson) => toJson.json())
      .then((json) => {
        setBeer(json.results);
      }).catch(err => {
        alert("oops something went wrong")
      })

    unsplash.search
      .photos(
        "liqueur",
        1,
        10,
        { orientation: "landscape", collections: collections },
        "popular"
      )
      .then((toJson) => toJson.json())
      .then((json) => {
        setSpirit(json.results);
      }).catch(err => {
        alert("oops something went wrong")
      })
  }, []);
  return (
    <div className={classes.Page}>
      <div className={classes.Inner}>
        {beer.length && wine.length && spirit.length ? (
          <>
            <div className={classes.Type}>
              <h1 className={classes.Header}>Wine</h1>
              <hr className={classes.Hr} />

              <Carousel
                responsive={responsive}
                containerClass={classes.Carousel}
              >
                {wine.map((x) => (
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
            <div className={classes.Type}>
              <h1 className={classes.Header}>Beer</h1>
              <hr className={classes.Hr} />
              <Carousel
                responsive={responsive}
                containerClass={classes.Carousel}
              >
                {beer.map((x) => (
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
            <div className={classes.Type}>
              <h1 className={classes.Header}>Spirits</h1>
              <hr className={classes.Hr} />
              <Carousel
                responsive={responsive}
                containerClass={classes.Carousel}
              >
                {spirit.map((x) => (
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
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Home;
