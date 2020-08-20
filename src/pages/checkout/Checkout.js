import React from "react";
import Context from "../../context/Context";
import { unsplash } from "../../service/unsplash";
import { price } from "../../helpers/helpers";
//css imports
import classes from "../sharedStyle/Style.module.css";
import checkoutStyle from "./Checkout.module.css";
import "react-multi-carousel/lib/styles.css";
//comp imports
import Checkout from "../../components/buttons/CheckButton";
import BackButton from "../../components/buttons/BackButton";

const Row = (props) => {
  return (
    <div className={checkoutStyle.Row}>
      <img className={checkoutStyle.Img} src={props.img} alt={props.details}/>
      <div>{props.amount}</div>
      <div>{"$" + (props.cost * props.amount).toFixed(2)}</div>
    </div>
  );
};

function Favorites() {
  const { checked } = React.useContext(Context);
  const [checkedArr, setCheckedArr] = React.useState([]);
  const [totalCost, setTotalCost] = React.useState(0);

  React.useEffect(() => {
    Object.keys(checked).forEach((id) =>
      unsplash.photos
        .getPhoto(id)
        .then((toJson) => toJson.json())
        .then((json) => {
          setCheckedArr((oldArray) => [...oldArray, json]);
          setTotalCost(
            (oldCost) =>
              oldCost + price(json.alt_description) * checked[json.id]
          );
        })
        .catch((err) => {
          alert("oops something went wrong");
        })
    );
  }, [checked]);

  return (
    <div className={classes.Page}>
      <div className={classes.Inner}>
        <div className={checkoutStyle.CheckoutInner}>
          <div className={checkoutStyle.Row}>
            <div>
              <b>Item</b>
            </div>
            <div>
              <b>Amount</b>
            </div>
            <div>
              <b>Cost</b>
            </div>
          </div>
          {checkedArr.map((x) => (
            <Row
              key={x.id}
              img={x.urls.thumb}
              amount={checked[x.id]}
              details={x.alt_description}
              cost={price(x.alt_description)}
            />
          ))}
          <div className={checkoutStyle.TotalCost}>
            <b>Total: </b>${totalCost.toFixed(2)}
          </div>{" "}
          <div className={checkoutStyle.Footer}>
            <BackButton text={"KEEP SHOPPING"} />
            <Checkout
              text={"CHECKOUT"}
              callback={() => (window.location.href = "/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
