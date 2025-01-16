// // // // import React, { useState } from 'react'

// // // // // const App = () => {
// // // // //   const [count , setCount] = useState(0)

// // // // //   return (
// // // // //     <div>
// // // // // <p>{count}</p>
// // // // // <button onClick={()=>setCount(count+1)}>Increment</button>
// // // // // <button onClick={()=>setCount(count-1)}>Decrement</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // import React, { useState } from 'react'

// // // const App = () => {
// // //   const [toggle , setToggle]= useState(false)
// // //   return (
// // //     <div>
// // //       <p >{toggle?"My name is mahesh kumar":""}</p>
// // //       <button onClick={()=>setToggle(!toggle)}>{toggle?"Hide" :"Show"}</button>
// // //     </div>
// // //   )
// // // }

// // // export default App
// // import React, { useState } from "react";

// // const App = () => {
// //   const [firstname, setFirstname] = useState("");
// //   const [lastname, setLastname] = useState("");
// //   const [fullname, setFullname] = useState([]);

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     // setFullname((prevFullname) => {
// //     //   const updatedFullname = [...prevFullname, { firstname, lastname }];
// //     //   return updatedFullname;
// //     // });
// //     setFullname([...fullname , {firstname , lastname}])
// //     setFirstname("");  // Reset the firstname input
// //     setLastname("");   // Reset the lastname input
// //   }

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="firstname"
// //           value={firstname}  // Controlled input
// //           onChange={(e) => setFirstname(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="lastname"
// //           value={lastname}  // Controlled input
// //           onChange={(e) => setLastname(e.target.value)}
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
// //       <div>
// //         <ul>
// //           {fullname.map((element, index) => (
// //             <li key={index}>
// //               {element.firstname} {element.lastname}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // // export default App

// // import React, { useState } from 'react'

// // const App = () => {
// //   const [likeCount, setLikeCount] = useState(0)  // State for likes
// //   const [dislikeCount, setDislikeCount] = useState(0)  // State for dislikes

// //   const handleLike = () => {
// //     setLikeCount(likeCount + 1);  // Increment like count
// //     setDislikeCount(dislikeCount - 1);  // Decrement dislike count
// //   }

// //   const handleDislike = () => {
// //     setDislikeCount(dislikeCount + 1);  // Increment dislike count
// //     setLikeCount(likeCount - 1);  // Decrement like count
// //   }

// //   return (
// //     <div>
// //       {/* Like button */}
// //       <button onClick={handleLike}>
// //         Like: {likeCount}
// //       </button>

// //       {/* Dislike button */}
// //       <button onClick={handleDislike}>
// //         Dislike: {dislikeCount}
// //       </button>
// //     </div>
// //   )
// // }

// // export default App


// // import "./styles.css"; // Optional styling

// // function App() {
// //   const [celsius, setCelsius] = useState(""); // State for Celsius input
// //   const [fahrenheit, setFahrenheit] = useState(""); // State for Fahrenheit input

// //   // Convert Celsius to Fahrenheit
// //   const handleCelsiusChange = (event) => {
// //     const celsiusValue = event.target.value;
// //     setCelsius(celsiusValue);
// //     // Formula: (Celsius * 9/5) + 32 = Fahrenheit
// //     setFahrenheit((celsiusValue * 9) / 5 + 32);
// //   };

// //   // Convert Fahrenheit to Celsius
// //   const handleFahrenheitChange = (event) => {
// //     const fahrenheitValue = event.target.value;
// //     setFahrenheit(fahrenheitValue);
// //     // Formula: (Fahrenheit - 32) * 5/9 = Celsius
// //     setCelsius(((fahrenheitValue - 32) * 5) / 9);
// //   };

// //   return (
// //     <div className="converter-container">
// //       <h1>Temperature Converter</h1>
// //       <div className="input-container">
// //         <label>
// //           Celsius:
// //           <input
// //             type="number"
// //             value={celsius}
// //             onChange={handleCelsiusChange}
// //             placeholder="Enter Celsius"
// //           />
// //         </label>
// //         <label>
// //           Fahrenheit:
// //           <input
// //             type="number"
// //             value={fahrenheit}
// //             onChange={handleFahrenheitChange}
// //             placeholder="Enter Fahrenheit"
// //           />
// //         </label>
// //       </div>
// //       <div className="output-container">
// //         <p>Celsius: {celsius}°C</p>
// //         <p>Fahrenheit: {fahrenheit}°F</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default  App;

// // import React, { useState } from "react";

// // // import "./styles.css"; // Optional styling

// // function App() {
// //   const [cart, setCart] = useState([]); // State to hold the list of items in the cart
// //   const [itemName, setItemName] = useState(""); // State to hold the item name input

// //   // Add item to the cart
// //   const addItemToCart = () => {
// //     if (itemName.trim() !== "") {
// //       setCart([...cart, itemName]); // Add the item to the cart
// //       setItemName(""); // Clear the input field after adding
// //     }
// //   };

// //   // Remove item from the cart
// //   const removeItemFromCart = (itemToRemove) => {
// //     setCart(cart.filter((item) => item !== itemToRemove)); // Remove the item from the cart
// //   };

// //   return (
// //     <div className="cart-container">
// //       <h1>Shopping Cart</h1>
      
// //       <div className="input-container">
// //         <input
// //           type="text"
// //           value={itemName}
// //           onChange={(e) => setItemName(e.target.value)}
// //           placeholder="Enter item name"
// //         />
// //         <button onClick={addItemToCart}>Add Item</button>
// //       </div>
      
// //       <div className="cart-items">
// //         <h2>Your Cart</h2>
// //         {cart.length === 0 ? (
// //           <p>Your cart is empty!</p>
// //         ) : (
// //           <ul>
// //             {cart.map((item, index) => (
// //               <li key={index}>
// //                 {item}
// //                 <button onClick={() => removeItemFromCart(item)}>Remove</button>
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";


// function App() {
//   // State to track selected items
//   const [selectedItems, setSelectedItems] = useState([]);
  
//   // List of items (e.g., fruits and vegetables)
//   const items = ["Apple", "Banana", "Carrot", "Cucumber", "Mango", "Lettuce"];

//   // Handle item selection or deselection
//   const handleCheckboxChange = (item) => {
//     setSelectedItems((prevItems) =>
//       prevItems.includes(item)
//         ? prevItems.filter((i) => i !== item) // Remove item if already selected
//         : [...prevItems, item] // Add item if not already selected
//     );
//   };

//   // Handle "Select All" checkbox
//   const handleSelectAll = () => {
//     setSelectedItems(items); // Select all items
//   };

//   // Handle "Deselect All" checkbox
//   const handleDeselectAll = () => {
//     setSelectedItems([]); // Deselect all items
//   };

//   return (
//     <div className="checkbox-container">
//       <h1>Checkbox Form</h1>
      
//       <div className="checkbox-list">
//         <h2>Select Items</h2>
//         {items.map((item) => (
//           <label key={item}>
//             <input
//               type="checkbox"
//               checked={selectedItems.includes(item)} // Check if item is selected
//               onChange={() => handleCheckboxChange(item)}
//             />
//             {item}
//           </label>
//         ))}
//       </div>
      
//       <div className="buttons-container">
//         <button onClick={handleSelectAll}>Select All</button>
//         <button onClick={handleDeselectAll}>Deselect All</button>
//       </div>
      
//       <div className="selected-items">
//         <h2>Selected Items:</h2>
//         {selectedItems.length === 0 ? (
//           <p>No items selected!</p>
//         ) : (
//           <ul>
//             {selectedItems.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;