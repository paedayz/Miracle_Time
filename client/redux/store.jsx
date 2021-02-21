import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducer/userReducer";
import systemReducer from "./reducer/systemReducer"
import dataReducer from "./reducer/dataReducer";
import friendReducer from './reducer/friendReducer'
import adminReducer from './reducer/adminReducer'


import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  system : systemReducer,
  user: userReducer,
  data: dataReducer,
  friend: friendReducer,
  admin: adminReducer
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