// todos:  add types and use websocket instead.

import React, { useState, useEffect, useRef } from "react";
import { Message } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { getMessages } from "../../api/messagesApi";
import emitter from "../../modules/emitter";
import { PULL_MESSAGE } from "../../constants";
import { joinChannel } from "../../actions/channals/index";

const ChatRoom = ({
  match: {
    params: { channalId },
  },
}: any) => {
  const dispatch = useDispatch();
  const timer = useRef() as any;
  const event = useRef({} as any);
  const [messages, setMessages] = useState([]);
  async function pullMessages() {
    const res = await getMessages(channalId);
    setMessages(res.data);
  }
  async function pullMessagePeriodically() {
    await pullMessages();
  }
  useEffect(() => {
    dispatch(joinChannel(channalId));
    pullMessages();
    timer.current = setInterval(() => pullMessagePeriodically(), 3000);
    event.current = emitter.subscribe(PULL_MESSAGE, () => {
      pullMessages();
    });
    return () => {
      clearInterval(timer.current);
      event.current(); // remove listerner.
    };
  }, [channalId]);
  if (!messages.length) {
    return <p>Be the first one to comment</p>;
  }
  return (
    <div>
      {messages.map((message: any) => {
        return (
          <Message key={message.id}>
            <Message.Header>{message.username}</Message.Header>
            <p>{message.text}</p>
          </Message>
        );
      })}
    </div>
  );
};

export default ChatRoom;
