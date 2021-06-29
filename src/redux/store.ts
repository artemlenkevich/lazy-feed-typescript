import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { postReducer } from "./postsReducer"

const rootReducer = combineReducers({
    posts: postReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunk))

declare const window: any

window.store = store