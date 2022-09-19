import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartButton = (props) => {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(cartActions.toggle());
  };
  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
