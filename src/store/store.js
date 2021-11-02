import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import makerReducer from "./reducers/makerReducer";
import productReducer from "./reducers/productReducer";
import LoginReducer from "./reducers/LoginReducer";

const reducers = combineReducers({
  products: productReducer,
  makers: makerReducer,
  cart: cartReducer,
  logged: LoginReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
