import React from "react";
import { Ul, List, Nav } from "../../styled-components";
import ListItem from "../../UI/ListItem/ListItem";

const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <List
          stListBorder="1px solid darkcyan"
          stListRad="10px"
          stListPadding="10px 20px"
          stListMargin="0 0 10px 0"
        >
          <ListItem to="/">Home</ListItem>
        </List>
        <List
          stListBorder="1px solid darkcyan"
          stListRad="10px"
          stListPadding="10px 20px"
        >
          <ListItem to="/count-page">Count Page</ListItem>
        </List>
      </Ul>
    </Nav>
  );
};

export default Navigation;
