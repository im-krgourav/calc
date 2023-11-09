// export default function DigitButton({ dispatch, digit }) {
//     return <button onClick={() =>}>{digit}</button>
// }
import { actions } from "./App";
import React from "react";

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => dispatch({ type: actions.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
