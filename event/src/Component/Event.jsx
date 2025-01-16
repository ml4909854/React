import React from "react";
import { useState } from "react";

function Event1() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <p>{toggle ? "Hi" : "Hello"}</p>
      <button onClick={()=>setToggle(!toggle)}>Click</button>
    </>
  );
}

function Event2(){
    const [color, setColor] = useState('black');

    const handleMouseEnter = () => setColor('red');
    const handleMouseLeave = () => setColor('black');
  
    return (
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color }}
      >
        Hover over me!
      </p>
    );
  
}


const Event = () => {
  return (
    <div>
      <Event1 />
      <Event2/>
    </div>
  );
};

export default Event;
