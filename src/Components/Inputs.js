import React, { useContext } from "react";
import { Language } from "../Shared/Context";
import './Inputs.scss'

const Inputs = ({ changeHandler, message, autor }) => {
  const eng = useContext(Language).english;

  return (
    <div className="Inputs printing">
      <div className="Inputs__">
        <textarea
          /* style={resize="none"} */
          placeholder={eng ? "Your message" : "Tu mensaje"}
          name="message"
          className="Inputs__message"
          onChange={changeHandler}
          value={message}
        />
      </div>
      <div>
        <input
          className="Inputs__signature"
          name="autor"
          value={autor}
          onChange={changeHandler}
          placeholder={eng ? "Your Signature" : "Tu firma"}
        />
      </div>
    </div>
  );
};

export default Inputs;
