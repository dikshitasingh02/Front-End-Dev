import {configureStore} from "@reduxjs/toolkit"
import counterReducer from"./slices/counterSlice"

export const Store = configureStore({
    reducer : {
        counter : counterReducer,
    },
});

export default Store;