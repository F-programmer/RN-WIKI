import { combineReducers } from "redux";

import items from "./items/reducer";
import header from "./header/reducer";

const rootReducers = combineReducers({ items, header });

export default rootReducers;
