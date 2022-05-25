// import { createStore } from "redux";
// import rootReducer from "./Reducers/index";
// const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store;



import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../src/Reducers/userSlice';
export default configureStore({
    reducer:
    {
        user: userReducer
    }
});