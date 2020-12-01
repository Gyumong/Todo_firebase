import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../stores/loading";
import { authService } from "./fbserver";
export default function saga(type) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILRUE`;

  return function* (action) {
    yield put(startLoading(type));
    try {
      console.log(action.payload);
      const response = yield call(
        authService.createUserWithEmailAndPassword(
          action.payload.username,
          action.payload.password
        )
      );
      console.log(response);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
