import { createStore } from "redux";
import stepReducer from "./stepReducer";

const stepStore = createStore(stepReducer);

export default stepStore;
