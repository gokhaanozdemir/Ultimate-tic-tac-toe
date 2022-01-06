import React from "react";

function Square(props) {
  const className =
    "square " +
    (props.value === "X" ? "classX" : props.value === "O" ? "classO" : "");
  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
}
export default Square;
