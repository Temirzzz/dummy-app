import { Link } from "react-router-dom";
import styled from "styled-components";

// Title
export const Title = styled.h1`
  color: #2f4f4f;
  margin: ${(props) => props.stTitleMargin || "0"};
`;

// Navigation
export const Nav = styled.nav`
  position: absolute;
  top: 50px;
  left: 30px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const List = styled.li`
  list-style: none;
  border: ${(props) => props.stListBorder || "none"};
  border-radius: ${(props) => props.stListRad || "0"};
  padding: ${(props) => props.stListPadding || "0"};
  margin: ${(props) => props.stListMargin || "0"};
  :hover {
    box-shadow: 10px 5px 5px gray;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 35px;
  color: black;
`;

//Button
export const StyledButton = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid darkcyan;
  background: none;
  font-size: 18px;
  cursor: pointer;
  margin: ${(props) => props.stBtnMargin || "0"};
  :hover {
    box-shadow: 10px 5px 5px gray;
  }
`;

//General Block
export const GeneralBlock = styled.div`
  position: ${(props) => props.stGeneralPos || "static"};
  display: ${(props) => props.stGeneralDisplay || "flex"};
  flex-direction: ${(props) => props.stGeneralDirect || "row"};
  flex-wrap: ${(props) => props.stGeneralWrap || "nowrap"};
  justify-content: ${(props) => props.stGeneralJusth || "center"};
  align-items: ${(props) => props.stGeneralAlign || "center"};
  width: ${(props) => props.stGeneralWidth || "auto"};
  height: ${(props) => props.stGeneralHeight || "auto"};
  max-width: ${(props) => props.stGeneralMaxWidth || "auto"};
  min-width: ${(props) => props.stGeneralMinWidth || "auto"};
  max-height: ${(props) => props.stGeneralMaxHeight || "auto"};
  min-height: ${(props) => props.stGeneralMinHeight || "auto"};
  background: ${(props) => props.stGeneralBack || "inherit"};
  padding: ${(props) => props.stGeneralPad || "0"};
  margin: ${(props) => props.stGeneralMargin || "0"};
  border: ${(props) => props.stGeneralBorder || "none"};
  border-radius: ${(props) => props.stGeneralRad || "0"};
  box-shadow: ${(props) => props.stGeneralShadow || "none"};
  color: ${(props) => props.stGeneralColor || "inherit"};
  font-family: ${(props) => props.stGeneralFF || "inherit"};
  font-size: ${(props) => props.stGeneralSize || "16px"};
  text-align: ${(props) => props.stGeneralTextAl || "center"};
  :hover {
    box-shadow: ${(props) => props.stGeneralHover || "350px"};
  }
`;
