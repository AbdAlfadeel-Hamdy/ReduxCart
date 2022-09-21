import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../../store/notification-slice";
const CartButton = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(notificationActions.toggle());
  };
  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
