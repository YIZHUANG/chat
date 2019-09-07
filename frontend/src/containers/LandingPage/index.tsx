import React, { useState } from "react";
import { Header, Input, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Header.Content>Welcome, choose a username</Header.Content>
      </Header>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Choose a username..."
      />
      <Button
        onClick={() => {
          dispatch(login({ username: value }));
          setValue("");
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

export default LandingPage;
