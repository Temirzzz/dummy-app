import React from "react";
import { StyledButton } from "../../styled-components";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
