// To create a component and show it on the screen, we must follow a 5-step process:

// 1. Import the React and ReactDOM libraries
import React from 'react'; // Import the React library which defines what a component is and how components work together
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library which knows how to render React components in the browser

// At this point we are not coding the component Headers, but just importing it:
import App from "./App.js";


// 2. Get a reference to the div with ID 'root'
const el = document.getElementById('root'); // Select the HTML element with the id 'root', which is the entry point for our React application

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el); // Create a React root for the selected HTML element, allowing React to manage and update this part of the DOM

// // 4. Create a component
// function App() {
//     // Define a new React component called App
//     // This component returns a JSX element that represents what should be displayed in the UI

//     // let message = "Bye there"; //Objects are not allowed to be printed in jsx elements, just can be shared as a prop

//     // let number = Math.random();
//     // if (number> 0.5) {
//     //     message="Hi there"
//     // }
//     // console.log(number);
    
//     // return <h1>{message}</h1>; // This JSX code will be transformed into a React element that displays "Hi!" on the screen

//     // // ----------- Example of rendering more than one line of code -----------//
//     // const name = "Alex";

//     // // If we have more than one element, we must have JUST ONE PARENT
//     // return(
//     //     <div>

//     //         <h1>Hi there, the name is:</h1>
//     //         <p>{name}</p>
//     //     </div>
//     // );


//     // // ----------------More than one variable--------------
//     // const name = "Alex";
//     // const edad = 32;
//     // const sum = 1+1;
//     // return(
//     //     <div>
//     //         <p>The name is {name}, the age is {edad}, and the result of the sum: {sum}</p>
//     //     </div>
//     // )

//     // // ----------------Inputs------------
//     // // The attributes here are called props, AND HAS THE CURLY BRACES, SO THEY CAN BE USED AS VARIABLES
//     // let minValue = 5;
//     // let maxValue = 10;

//     // // Defining styles in an object
//     // let inputStyle = {
//     //     // no spaces in styles
//     //     width: '200px', 
//     //     border: '2px solid red',
//     //     padding: '5px',
//     //     marginTop: '10px'
//     // };
//     // return (<div>
//     //     {/* With explicit props */}
//     //     {/* <input type="number" min={5} max={10}/> */}

//     //     {/* if style is directly provided as an object: style={{border:2px;}}, if is a variable: style={variable} */}
//     //     <input type="number" min={minValue} max={maxValue} style={inputStyle}/> {/*Defining an object*/}
        
//     // </div>)

//     // --------textarea with attributes--------
//     // There are many changes in the name of attributes that are used in JSX vs HTML, so it is crucial to review documentation

//     // Rules of JSX VS HTML
//     // - All props names follow camelCase
//     // - Number attributes use curlybraces
//     // - true can be written without curly braces, but false not
//     // - The "class" attribute is written as "className"
//     // -  in-line styles are provided as objects: for example style={{border:2px;}}
//     // return(
//     //     <div>
//     //         <textarea autoFocus={true} placeHolder='Hola' className='text'/>
//     //     </div>
//     // )

    
// }



// 5. Show the component on the screen
root.render(<App />); // Render the App component to the root element, making it appear on the screen
