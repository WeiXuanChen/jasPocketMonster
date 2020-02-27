import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';

import foodTypeReducer from './reducers/foodTypeReducer';

const reducer = combineReducers({
  foodTypeReducer,
  routing: routerReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(
    routerMiddleware(createBrowserHistory()),
    sagaMiddleware,
  ),
);

store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);

export default store;
export const history = syncHistoryWithStore(createBrowserHistory(), store);
