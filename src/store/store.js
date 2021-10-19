import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import makerReducer from "./reducers/makerReducer";
import productReducer from "./reducers/productReducer";
import spinnerReducer from "./reducers/spinnerReducer";

const reducers = combineReducers({
    products: productReducer,
    makers: makerReducer,
    loading: spinnerReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;