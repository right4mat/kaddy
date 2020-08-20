import React from "react";
import Carousel from "react-multi-carousel";
import Context from "../../context/Context";
import { unsplash } from "../../service/unsplash";
import { price } from "../../helpers/helpers";
//css imports
import classes from "../sharedStyle/Style.module.css";
import checkoutStyle from "./Checkout.module.css";
import "react-multi-carousel/lib/styles.css";
//comp imports
import Loading from "../../components/loading/Loading";
import Checkout from "../../components/buttons/CheckButton";
import BackButton from "../../components/buttons/BackButton";

const Row = (props) => {
  return (
    <div className={checkoutStyle.Row}>
      <img className={checkoutStyle.Img} src={props.img} />
      <div>{props.amount}</div>
      <div>{"$" + (props.cost * props.amount).toFixed(2)}</div>
    </div>
  );
};

function Favorites() {
  const { checked } = React.useContext(Context);
  const [checkedArr, setCheckedArr] = React.useState([]);
  const [loading, setLoading] = React.useState(Object.keys(checked).length);
  const [totalCost, setTotalCost] = React.useState(0);

  React.useEffect(() => {
    Object.keys(checked).forEach((id) =>
      unsplash.photos
        .getPhoto(id)
        .then((toJson) => toJson.json())
        .then((json) => {
          setCheckedArr((oldArray) => [...oldArray, json]);
          setTotalCost(
            oldCost => oldCost + price(json.alt_description) * checked[json.id]
          );
          setLoading(false);
        }).catch(err => {
          alert("oops something went wrong")
        })
    );
  }, []);

  return (
    <div className={classes.Page}>
      <div className={classes.Inner}>
        <div className={checkoutStyle.CheckoutInner}>
          <div className={checkoutStyle.Row}>
            <div><b>Item</b></div>
            <div><b>Amount</b></div>
            <div><b>Cost</b></div>
          </div>
          {checkedArr.map((x) => (
            <Row
              img={x.urls.thumb}
              amount={checked[x.id]}
              cost={price(x.alt_description)}
            />
          ))}
          <div className={checkoutStyle.TotalCost}>
              <b>Total: </b>$
              {totalCost.toFixed(2)}
            </div>{" "}
          <div className={checkoutStyle.Footer}>
            <BackButton text={"KEEP SHOPPING"} />
            <Checkout text={"CHECKOUT"} callback={()=>window.location.href='/'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
