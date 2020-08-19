import React from "react";
import Carousel from "react-multi-carousel";
import Context from "../../context/Context";
import { unsplash } from "../../service/unsplash";
import {price} from '../../helpers/helpers'
//css imports
import shared from "../sharedStyle/Style.module.css";
import classes from "./Checkout.module.css";
import "react-multi-carousel/lib/styles.css";
//comp imports
import Loading from "../../components/loading/Loading";

const Row = (props) => {
  return (
    <div className={classes.Row}>
      <img className={classes.Img} src={props.img} />
      <div>{props.amount}</div>
      <div>{props.cost}</div>
    </div>
  );
};

function Favorites() {
  const { checked } = React.useContext(Context);
  const [checkedArr, setCheckedArr] = React.useState([]);
  const [loading, setLoading] = React.useState(Object.keys(checked).length);

  React.useEffect(() => {
    Object.keys(checked).forEach((id) =>
      unsplash.photos
        .getPhoto(id)
        .then((toJson) => toJson.json())
        .then((json) => {
          setCheckedArr((oldArray) => [...oldArray, json]);
          setLoading(false);
        })
    );
  }, []);

  return (
    <div className={shared.Page}>
      <div className={classes.Checkout}>
        <div className={classes.CheckoutInner}>
        <div className={classes.Row}>
            <div>Item</div>
            <div>Amount</div>
            <div>Cost</div>
        </div>
          {checkedArr.map((x) => (
            <Row img={x.urls.thumb} amount={checked[x.id]} cost={price(x.alt_description)} />
          ))}
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
