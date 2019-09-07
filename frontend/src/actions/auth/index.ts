import { User } from "../../types";

export enum ACTIONS {
  LOGIN = "LOGIN",
}

export const login = ({ username }: User) => {
  return {
    type: ACTIONS.LOGIN,
    payload: {
      username,
    },
  };
};

export interface LOGIN {
  type: ACTIONS.LOGIN;
  payload: User;
}

export type AUTH_ACTIONS = LOGIN;
