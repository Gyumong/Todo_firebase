import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INIT_FORM = "auth/INIT_FORM";

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
    }),
  },
  init
);

export default auth;
