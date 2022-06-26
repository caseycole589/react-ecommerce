import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;

//root reducer
const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
	// process.env.NODE_ENV === "development" && logger,
	thunk,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

export const persistor = persistStore(store);
