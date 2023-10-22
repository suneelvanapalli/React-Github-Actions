import { Store, createStore } from "redux";
import rootReducer from "../reducers";


const store: Store = createStore(rootReducer);

export default store;