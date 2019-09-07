import { ACTIONS, CHANNELS_ACTIONS } from "../../actions/channals";
import { Channel } from "../../types";

interface State {
  selectedChannel: string;
  data: Channel[];
}
const initialState: State = {
  selectedChannel: "",
  data: [],
};

export default (state: State = initialState, action: CHANNELS_ACTIONS) => {
  switch (action.type) {
    case ACTIONS.CHANNELS_LOADING: {
      // to dos.. show loading, can't do due to timelimit.
      return state;
    }
    case ACTIONS.CHANNELS_LOADED: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case ACTIONS.SELECT_CHANNEL: {
      return {
        ...state,
        selectedChannel: action.id,
      };
    }
    default:
      return state;
  }
};
