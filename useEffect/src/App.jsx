// // import React, { useState } from "react";
// // import { useEffect } from "react";

// // const App = () => {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     let timer = setInterval(() => {
// //       setCount(count + 1);
// //     }, 1000);
// //   }, [count]);

// //   return (
// //     <>
// //       <p>{count}</p>
// //     </>
// //   );
// // };

// // export default App;


// import React, { useState  , useEffect} from 'react'

// const App = () => {

//   const[data , setData] = useState([])


//   useEffect(() => {
//    async function fetchData(){
//     let response =await fetch("https://fakestoreapi.com/products")
//     console.log(response)
//     let Data = await response.json()
//    setData(Data)
//    }
//    fetchData()
  
//   }, [])

  
//   return (
//     <div>
//       {data.map((ele , index)=>(
//        <h1 key={index}>{ele.title}</h1>
//       ))}
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useRef } from "react";

// function App() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus(); // Focus the input field on mount
//   }, []);

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Enter username" />
//     </div>
//   );
// }

// export default App;

import React, { useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h1>{time}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
