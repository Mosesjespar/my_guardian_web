import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_ITEM_COUNT,
  INCREMENT_ITEM_COUNT,
  REMOVE_FROM_CART,
} from "../actions";

const initialState = {
  cart: [],
  seletedProduct: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...action.payload, quantity: 1, productId: action.payload?.id },
          ],
        };
      }
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case INCREMENT_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREMENT_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case CLEAR_CART:
      return {
        cart: [],
        seletedProduct: {},
      };
    default:
      return state;
  }
};

export default cartReducer;
