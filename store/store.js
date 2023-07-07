import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenses-redux"
export const store = configureStore({
    reducer:{
        expensesRedux : expensesReducer
    }
});