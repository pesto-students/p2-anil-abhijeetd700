import { createStore } from "redux";
import lightReducer from "./lightReducer";

const lightsStore = createStore(lightReducer);

export default lightsStore;
