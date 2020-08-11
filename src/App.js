import React, { useState } from "react";
import "./styles.css";

import PinMessage from "./PinMessage";
import Message from "./Message";
import Keyboard from "./Keyboard";

// hardcoded correct combination to unlock
const correctCombination = "0000";

export default function App() {
  const [pin, setPin] = useState([]);
  const [locked, setLocked] = useState(true);
  const [message, setMessage] = useState("LOCKED");
  const [attempts, setAttempts] = useState(0);

  const unlock = () => {
    if (attempts >= 2) {
      setMessage("Too many incorrect attempts");
      setAttempts(attempts + 1);
      return false;
    }

    if (pin && pin.join("") === correctCombination) {
      setLocked(false);
      setPin([]);
      setMessage("UNLOCKED");
    } else {
      setPin([]);
      setMessage("Incorrect entry");
      setAttempts(attempts + 1);
    }
  };
  const handleChange = (keyPressed) => {
    if (keyPressed === "clear") {
      setPin([]);
      setMessage("Locked");
      return;
    }
    if (keyPressed === "unlock") {
      return unlock();
    }
    debugger;
    if (pin.length < 4) {
      setPin([...pin, keyPressed]);
    }
  };

  const keyboardDisabled = attempts === 3;

  return (
    <div className="App p-3 m-3 w-50 m-auto">
      <Message text={message} />
      {!keyboardDisabled && <PinMessage pin={pin} />}
      {!keyboardDisabled && locked && <Keyboard onChange={handleChange} />}
    </div>
  );
}
