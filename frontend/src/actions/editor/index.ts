export enum ACTIONS {
  OPEN_EDITOR = "OPEN_EDITOR",
  CLOSE_EDITOR = "CLOSE_EDITOR",
}

export const openEditor = () => {
  return {
    type: ACTIONS.OPEN_EDITOR,
  };
};

export const closeEditor = () => {
  return {
    type: ACTIONS.CLOSE_EDITOR,
  };
};

interface OPEN_EDITOR {
  type: ACTIONS.OPEN_EDITOR;
}
interface CLOSE_EDITOR {
  type: ACTIONS.CLOSE_EDITOR;
}

export type EDITOR_ACTIONS = OPEN_EDITOR | CLOSE_EDITOR;
