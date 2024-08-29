import React from "react";
import ReactDOM from "react-dom/client";

///// Q1
// const a = React.createElement(
//     "div",
//      {},
//     [
//         React.createElement(
//             "h1",
//             {},
//             "h1"
//         ),
//         React.createElement(
//             "h2",
//             {},
//             "h2"
//         ),
//         React.createElement(
//             "h3",
//             {},
//             "h3"
//         )
//     ]

// )

////Q2 
// const a = <div>
//     <h1>this is h1</h1>
//     <h2>this is h2</h2>
//     <h3>this is h3</h3>
// </div>

////Q3

// const Fun = () =>(
//     <div>
//         <h1>Hello H1</h1>
//         <h2>hello h2</h2>
//         <h3>hello h3</h3>
//     </div>
// )


/////Q5

// const Fun = ({id}) =>(
//     <div>
//         <h1>Hello {id}</h1>
//         <h2>hello h2</h2>
//         <h3>hello h3</h3>
//     </div>
// )

////Q6

// const X = () => (
//     <>
//       <Fun></Fun>
//       <div>
//         <h1>Composition of Components</h1>
//       </div>
//     </>
// )


////// Q7


const Header = () => {
    const mystyle = {
        color : "blue",
        display : "flex",
        // backgroundColor:"#c3c3c3",
        justifyContent : "space-between"
    };

    const b = {
        fontSize : "30px",
        color : "black",
        backgroundColor : "grey",
        width : "70px",
        borderRadius : "5px",
    }

    return ( 
        <div style={mystyle}  > 
            <div style={b}>Logo</div>
            <input type="text" placeholder="Search.." name="search"></input>
            <div style={b}> icon</div>
       </div>
    )
    
}
const root = ReactDOM.createRoot(document.getElementById("top"));

root.render(<Header/>)











