export const LOGIN = "LOGIN";

//cart
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const INCREMENT_ITEM_COUNT = "INCREMENT_ITEM_COUNT";
export const DECREMENT_ITEM_COUNT = "DECREMENT_ITEM_COUNT";

export const loginAction = (isLoggedIn) => {
  return {
    type: LOGIN,
    payload: isLoggedIn,
  };
};
