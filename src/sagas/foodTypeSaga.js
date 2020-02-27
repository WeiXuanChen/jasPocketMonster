import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_FOODTYPE_LIST_SUCCESS } from '../actions/foodTypeAction';

function* fetchData() {
  const data = yield call(
    () => fetch('http://localhost:3102/test')
      .then((response) => {
        console.log('response.json(): ', response.json());
      }),
  );
  yield put({ type: GET_FOODTYPE_LIST_SUCCESS, payload: { data } });
}

function* foodTypeSaga() {
  yield takeEvery(GET_FOODTYPE_LIST_SUCCESS, fetchData);
}

export default foodTypeSaga;
