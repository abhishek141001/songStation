import { configureStore } from "@reduxjs/toolkit";

import { userAuthReducer } from "./slices/UserAuth";


export const Store = configureStore({
    reducer:{
        userAuth: userAuthReducer,
        
    },
});