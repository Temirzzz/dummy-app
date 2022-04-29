import React from "react";
import { StyledLink } from "../../styled-components";

const ListItem = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default ListItem;
