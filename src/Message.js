import React from "react";

export default function MessageComponent(props) {
  return (
    <div className="row mb-5">
      <div className="col-12 text-center">{props.text}</div>
    </div>
  );
}
