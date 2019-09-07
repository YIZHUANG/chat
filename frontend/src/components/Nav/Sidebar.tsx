import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import { useDispatch } from "react-redux";

import useSelector from "../../hooks/useSelector";
import { getChannel, joinChannel } from "../../actions/channals";
import { openEditor } from "../../actions/editor";

const Sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannel());
  }, []);
  const channels = useSelector(state => state.channels.data);
  return (
    <Menu
      // won't do this in real life.
      style={{
        marginRight: 100,
      }}
      vertical
    >
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Dropdown item text="Channals">
        <Dropdown.Menu>
          {channels.length
            ? // todos: type
              channels.map((channel: any) => {
                return (
                  <Dropdown.Item key={channel.id}>
                    <Link
                      onClick={() => dispatch(joinChannel(channel.id))}
                      to={`/channal/${channel.id}`}
                    >
                      {channel.topic}
                    </Link>
                  </Dropdown.Item>
                );
              })
            : null}
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item name="Editor" onClick={() => dispatch(openEditor())}>
        <Icon name="grid layout" />
        Editor
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
