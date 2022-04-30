import React from "react";
import { GeneralBlock } from "../../styled-components";

const Post = ({ title, body }) => {
  return (
    <GeneralBlock
      stGeneralPad="15px 10px"
      stGeneralMaxWidth="450px"
      stGeneralWidth="100%"
      stGeneralMargin="0 0 10px 0"
      stGeneralBorder="1px solid darkcyan"
      stGeneralRad="5px"
      stGeneralHover="10px 5px 5px gray"
      stGeneralMediaWidth="100%"
      stGeneralMediaMardg="0 0 10px 0"
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </GeneralBlock>
  );
};

export default Post;
