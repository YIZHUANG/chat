import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import useSelector from "../../../hooks/useSelector";
import { closeEditor } from "../../../actions/editor/index";
import { sendMessage } from "../../../api/messagesApi";
import emitter from "../../../modules/emitter";
import { PULL_MESSAGE } from "../../../constants";

// todos: move channel to redux.
// so that we don't use emitter;
const Editor = () => {
  const channalId = useSelector(state => state.channels.selectedChannel);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const open = useSelector(state => state.editor.open);
  const username = useSelector(state => state.auth.username) || "John";
  const close = () => {
    dispatch(closeEditor());
  };
  async function onSubmit() {
    await sendMessage({
      channelId: channalId,
      text,
      username,
    });
    emitter.emit(PULL_MESSAGE);
    setText("");
    close();
  }
  if (!channalId) {
    // should display a messaget that the user need to join a room
    return null;
  }
  return (
    <Modal dimmer open={open} onClose={close}>
      <Modal.Header>Send message</Modal.Header>
      <Modal.Content>
        <textarea
          rows={4}
          style={{
            width: 200,
            height: 100,
          }}
          maxLength={250}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={close}>
          Nope
        </Button>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Send"
          onClick={onSubmit}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default Editor;
