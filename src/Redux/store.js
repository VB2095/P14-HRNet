import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Reducer/formReducer";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
