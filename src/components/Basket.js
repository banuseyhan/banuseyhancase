import React from "react";
import BasketIcon from "../icons/basket-icon";
import AppleIcon from "../icons/apple-icon";
import { useSelector , useDispatch} from "react-redux";
import { reset } from "../reducers/AppReducer";
import "../styles/basket.scss";

const Basket = (props) => {
  const isFinalized = useSelector((state) => state.shake.finalize);

  const apples = new Array(2).fill(0);
  const dispatch = useDispatch();
  if(isFinalized === false && props.fall) {
    clearTimeout (()=> {
      dispatch(reset());
  }, 3000)
  }
  return (
      <div className="basket-container">
          <BasketIcon size="100" />
          <div style={{display: isFinalized ? "block" : "none"}}>
          {apples.map((apple, index) => <AppleIcon key={index} size="24" />)}
          </div>
          
      </div>
  );
};

export default Basket;