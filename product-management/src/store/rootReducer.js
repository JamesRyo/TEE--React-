//bütün redux statelerini toplarız burda uygulamaya (app.js) ekleriz.


import {combineReducers} from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;