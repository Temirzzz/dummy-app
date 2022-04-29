import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions";
import Button from "../../UI/Button/Button";
import { GeneralBlock } from "../../styled-components";

const CountBlock = () => {
  const data = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <GeneralBlock
      stGeneralDirect="column"
      stGeneralShadow="10px 5px 5px gray"
      stGeneralMargin="30px"
      stGeneralBorder="1px solid darkcyan"
      stGeneralRad="5px"
      stGeneralMinWidth="350px"
      stGeneralMinHeight="400px"
    >
      <GeneralBlock
        stGeneralWidth="200px"
        stGeneralHeight="200px"
        stGeneralBack="#708090"
        stGeneralMargin="30px 0 30px"
        stGeneralRad="5px"
      >
        {data}
      </GeneralBlock>
      <Button stBtnMargin="0 0 5px 0" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </GeneralBlock>
  );
};

export default CountBlock;
