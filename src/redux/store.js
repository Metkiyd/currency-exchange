import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

import allValutesReducer from "./reducers/reducer";
import allPostsReducer from "./reducers/postsReducer";
import userReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  allValutes: allValutesReducer,
  allPosts: allPostsReducer,
  user: userReducer

});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;