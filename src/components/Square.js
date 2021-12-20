import React from "react";

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
}
export default Square;
