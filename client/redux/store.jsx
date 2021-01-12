import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reducer/dataReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  data: dataReducer,
});

// const store = createStore(
//   reducers,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;