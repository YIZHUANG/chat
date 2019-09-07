import { ACTIONS, EDITOR_ACTIONS } from "../../actions/editor";

interface State {
  open: boolean;
}
const initialState: State = {
  open: false,
};

export default (state: State = initialState, action: EDITOR_ACTIONS) => {
  switch (action.type) {
    case ACTIONS.OPEN_EDITOR: {
      return {
        open: true,
      };
    }
    case ACTIONS.CLOSE_EDITOR: {
      return {
        open: false,
      };
    }
    default:
      return state;
  }
};
