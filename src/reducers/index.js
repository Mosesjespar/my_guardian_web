import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import AuthReducer from "./auth";

const rootReducer = combineReducers({
  auth: AuthReducer,
  cart: cartReducer,
});

export default rootReducer;
