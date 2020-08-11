import React, { useEffect } from "react";

const keyCodeToNumber = {
  96: 0,
  97: 1,
  98: 2,
  99: 3,
  100: 4,
  101: 5,
  102: 6,
  103: 7,
  104: 8,
  105: 9,
  48: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9
};

export default function KeyboardComponent(props) {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, "clear", 0, "unlock"];

  useEffect(() => {
    const handleKeyPress = (event) => {
      event.stopPropagation();
      const numPad = keyCodeToNumber[event.keyCode] >= 0;

      // escape clears the keyboard
      if (event.keyCode === 27) {
        return props.onChange("clear");
      }
      // enter submits the pin
      if (event.keyCode === 13) {
        return props.onChange("unlock");
      }

      if (numPad) {
        return props.onChange(keyCodeToNumber[event.keyCode]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [props.onChange]);

  return (
    <div className="row border-top border-left">
      {buttons.map((button) => {
        return (
          <div
            key={button}
            onClick={() => props.onChange(button)}
            className="col-4 text-capitalize text-center border-right border-bottom"
          >
            <div className="m-3">{button}</div>
          </div>
        );
      })}
    </div>
  );
}
