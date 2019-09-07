import { ACTIONS, AUTH_ACTIONS } from "../../actions/auth/index";
interface State {
  username: string;
}
const initialState: State = {
  username: "",
};

export default (state: State = initialState, action: AUTH_ACTIONS) => {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      return {
        username: action.payload.username,
      };
    }
    default:
      return state;
  }
};
