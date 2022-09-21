import { notificationActions } from "./notification-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://react-http-a0e9b-default-rtdb.firebaseio.com/cart.json`
      );
      if (!response.ok) throw new Error(`Fetch data failed!`);

      const data = await response.json();
      dispatch(
        cartActions.replaceCart({
          totalItems: data.totalItems,
          shoppingList: data.shoppingList || [],
        })
      );
    };
    try {
      await fetchData();
    } catch (err) {
      dispatch(
        notificationActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://react-http-a0e9b-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) throw new Error(`Failed`);
    };
    try {
      await sendRequest();
      dispatch(
        notificationActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        notificationActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
