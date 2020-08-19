import React from "react";
import Carousel from "react-multi-carousel";
//css imports
import shared from "../sharedStyle/Style.module.css";
import classes from "./Home.module.css";
//comp imports
import Product from "../../components/product/Product";
import "react-multi-carousel/lib/styles.css";

const wine = "https://assets.langtons.com.au/images/B0403108.png";
const beer = "https://media.danmurphys.com.au/dmo/product/839496-1.png";
const spirits = "https://media.danmurphys.com.au/dmo/product/907623-1.png";

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

function Home() {
  return (
    <div className={shared.Page}>
      <div className={classes.Home}>
        <div className={classes.Type}>
          <h1 className={classes.Header}>Wine</h1>
          <hr className={classes.Hr} />
          <Carousel
            responsive={responsive}
            containerClass={classes.Carousel}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <Product
              img={wine}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={wine}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={wine}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={wine}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={wine}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={wine}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={wine}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={wine}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
          </Carousel>
        </div>
        <div className={classes.Type}>
          <h1 className={classes.Header}>Beer</h1>
          <hr className={classes.Hr} />
          <Carousel
            responsive={responsive}
            containerClass={classes.Carousel}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <Product
              img={beer}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={beer}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={beer}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={beer}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
          </Carousel>
        </div>
        <div className={classes.Type}>
          <h1 className={classes.Header}>Spirits</h1>
          <hr className={classes.Hr} />
          <Carousel
            responsive={responsive}
            containerClass={classes.Carousel}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <Product
              img={spirits}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={spirits}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={spirits}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
            <Product
              img={spirits}
              brand={"testBrand"}
              details={"sdfsfsfsdf dsfsfsdf dss fsdfdfds"}
              price={"$56.30"}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
