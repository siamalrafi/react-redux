import { store } from "./../store";
import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
   console.log(store, action);

   next(action);
};

export default logger;
