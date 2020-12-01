import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import saga from "./saga";
import { authService } from "./fbserver";
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INIT_FORM = "auth/INIT_FORM";

const REGISTER = "auth/REGISTER";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

export const changeField = createAction(
  CHANGE_FIELD,
  // payload 생성 함수
  ({ form, key, value }) => ({
    form, // register, login
    key, // username,password,passwordConfirm
    value, // 실제 바꾸려는 값
  })
);

export const initForm = createAction(INIT_FORM, (form) => form);
export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password,
}));
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

// 사가

const registerSaga = saga(REGISTER, register);
const loginSaga = saga(LOGIN, login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}
const init = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INIT_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: init[form],
      authError: null,
    }),
    //회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    //로그인
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  init
);

export default auth;
