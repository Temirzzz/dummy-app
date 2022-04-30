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
  @media (max-width: 990px) {
    margin-top: 30px;
    position: static;
  }
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
  color: ${(props) => props.stlinkcolor || "black"};
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
  color: ${(props) => props.stBtnColor || "black"};
  :hover {
    box-shadow: 10px 5px 5px gray;
  }
`;

//Form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 120px;
  border-radius: 5px;
  border: 1px solid darkcyan;
  background: none;
  margin: ${(props) => props.stFormMargin || "0"};
  padding: ${(props) => props.stFormPadding || "0"};
  @media (max-width: 768px) {
    min-width: 280px;
  }
`;

export const StyledInput = styled.input`
  min-width: 250px;
  max-width: 320px;
  width: 100%;
  height: 45px;
  border: 1px solid darkcyan;
  background: none;
  padding-left: 10px;
  margin: ${(props) => props.stInpMargin || "0"};
  ::-webkit-input-placeholder {
    color: darkcyan;
  }
  :focus {
    ::-webkit-input-placeholder {
      color: blue;
      padding-top: 10px;
    }
  }
  @media (max-width: 768px) {
    min-width: 240px;
  }
`;

//Error Messages
export const ErrorMessage = styled.span`
  position: relative;
  top: -15px;
  text-align: left;
  font-size: 12px;
  color: red;
`;

//General Block
export const GeneralBlock = styled.div`
  position: ${(props) => props.stGeneralPos || "static"};
  display: ${(props) => props.stGeneralDisplay || "flex"};
  flex-direction: ${(props) => props.stGeneralDirect || "row"};
  flex-wrap: ${(props) => props.stGeneralWrap || "nowrap"};
  justify-content: ${(props) => props.stGeneralJust || "center"};
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
  @media (max-width: 768px) {
    width: ${(props) => props.stGeneralMediaWidth || "auto"};
    min-width: ${(props) => props.stGeneralMediaMinW || "auto"};
    margin: ${(props) => props.stGeneralMediaMardg || "0"};
    align-items: ${(props) => props.stGeneralMediaAlign || "center"};
  }
`;
