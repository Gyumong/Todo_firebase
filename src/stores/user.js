import { createAction, handleActions } from "redux-actions";
import { put, takeLatest } from "redux-saga/effects";
import saga from "./saga";
import { authService } from "./fbserver";

const TEMP_SET_USER = "user/TEMP_SET_USER";

// 회원 정보 확인
const CHECK = "user/CHECK";
const CHECK_SUCCESS = "user/CHECK_SUCCESS";
const CHECK_FAILURE = "user/CHECK_FAILURE";

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);

function* checkSaga() {
  try {
    const user = authService.currentUser;
    yield put(CHECK);
    console.log(user);
  } catch (e) {}
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

const init = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },
  init
);
