import { createStore ,applyMiddleware} from "redux"
import {logger} from "redux-logger"

import rootReducer from "./rootReducer"

import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

import {routerMiddleware} from "react-router-redux"
import {createBrowserHistory} from "history"

export const history =  createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware,routerMiddleware(history)]

if(process.env.NODE_ENV === "development")
{
    middleware.push(logger)
}

export const store  = createStore(rootReducer,applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)