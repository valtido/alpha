import React from "react";

// used to keep the height from collapsing when null values
const whiteSpace = "\u00A0";

export default function PinMessageComponent(props) {
  const obscured = props.pin.map((digit) => "*");

  return (
    <div className="row">
      <div className="col-12 text-center">
        {obscured.length ? obscured : whiteSpace}
      </div>
    </div>
  );
}
