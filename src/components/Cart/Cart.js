import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Cart = () => {
  const cartIsOpened = useSelector((state) => state.notification.cartIsOpened);
  const shoppingList = useSelector((state) => state.cart.shoppingList);
  const cartItems = shoppingList.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      total={item.quantity * item.price}
    />
  ));
  return (
    <Fragment>
      {cartIsOpened && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>{cartItems}</ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
