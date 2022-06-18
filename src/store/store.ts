import { applyMiddleware, compose, createStore } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

//root reducer
// const persistConfig = {
// 	key: "root",
// 	storage,
// 	blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
	// process.env.NODE_ENV === "development" && logger,
	thunk,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);

// export const persistor = persistStore(store);
