import { Channel } from "../../types";
import { Dispatch } from "redux";
import { getChannels } from "../../api/channelsApi";

export enum ACTIONS {
  SELECT_CHANNEL = "SELECT_CHANNEL",
  CHANNELS_LOADING = "CHANNEL_LOADING",
  CHANNELS_LOADED = "CHANNEL_LOADED",
}

export const getChannel = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.CHANNELS_LOADING,
    });
    const channalResponse = await getChannels();
    dispatch({
      type: ACTIONS.CHANNELS_LOADED,
      payload: channalResponse.data,
    });
  };
};
export const joinChannel = (id: string) => {
  return {
    type: ACTIONS.SELECT_CHANNEL,
    id,
  };
};
export interface GET_CHANNALS_INIT {
  type: ACTIONS.CHANNELS_LOADING;
}
export interface SELECT_CHANNEL {
  type: ACTIONS.SELECT_CHANNEL;
  id: string;
}
export interface GET_CHANNALS_SUCCESS {
  type: ACTIONS.CHANNELS_LOADED;
  payload: Channel[];
}

export type CHANNELS_ACTIONS = GET_CHANNALS_INIT | GET_CHANNALS_SUCCESS | SELECT_CHANNEL;
