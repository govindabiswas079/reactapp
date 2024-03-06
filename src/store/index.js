import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer/appReducer";

export const store = configureStore({
    reducer : {
        app: appReducer
    }
})