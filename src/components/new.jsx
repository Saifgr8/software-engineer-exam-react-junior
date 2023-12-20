import React, { useState } from "react";

const New = ({ text }) => {
   //state to maintain value of input prop
    const [changeText, setChangeText] = useState(text)
    //method to toggle text
    const handleToggle = () => {
        setChangeText((prevText) => prevText === 'hello' ? 'world' : 'hello' )
    }

  return (
    <div style={{ paddingTop: "0.625rem" }}>
      <span style={{cursor: 'pointer'}} onClick={handleToggle}>{changeText}</span>
    </div>
  );
};

export default New;
