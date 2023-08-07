// export const Title=()=>{
// this is exportiong by name this is exporting a constant variable title by name

// import { useState } from "react";

import React, { useState } from 'react';
import Logo from "../components/Assets/img/food.jpg"
import {Link} from "react-router-dom"

  export const Title=()=>{
    
    return(
      
      <div>
      <a href="/">
         <img alt="Logo" className="Logo" src={Logo}></img>
      </a>
     
      </div>
      
    )
  };
  // const searchtxt="KFC" 
  // const [Searchtext,setSearchtext]=useState("KFC"); 
  // const Searcht=useState(); 
  // const [searchText,setsearchText]=Searcht
  // returns=[variable name, function to update the variable]
  //  hook does not work outside the functional componenets
  // it is changing the state of the variable and due to which u will see changes in dom
  // serachtxt is a local state variable
  // TO create state variables this function returns an Array and first element of this array is ur variable name and second is usestate function
  // if u need to maintain a variable which is changeing state every time like serch txt then u need to mantain a react variable
  // every componenet in react maintains a state AND u can put in all variables into the state every time you have to create a local state variable u use state in it
  // now what is state what is rendrered in that particular variable
  // what is hooks
  // A React hook is just a normal js function like functional componenets every hook has a saprate specific function in it THAT is written by meta dev
  // what is  usestate IT is a hook which is used to create State-Variables all func of hooks are written by js devp
  function changeColor(e) {
    e.target.style.color = 'red';
  }
  function sameColor(e) {
    e.target.style.color = 'black';
  }
  
//  every time ur variable changes to track that change ur variable needs to be in sink with the ui
// reacat dont know how many times u have change ur variable
 export const Myapphead=()=>{
  // const[title,setTitle]=useState("SETs the title")
  // when we setstate of a componenet react kind of rerender or refreshes that whole componenet ie triggering the reconcillation processes like on change or on click
// let settext="kfc"
//  const [clickedButton,setclickedButton]=useState("False")
//  const [searchText,setsearchText]=useState("KFC"); 

const[login,setLogin]=useState(false);
 return(
  <>
      {/* <div className="search"> */}
        {/* <input id="myinput" placeholder="Search-Resturants" value={searchText} onChange={(e)=>{
        //  there is one way data binding in react
         setsearchText(e.target.value)
        //  always use set keyword for setting at last that state gonna save in oue searchText variable only
          //  settext=e.target.value
          //  console.log(settext)
        //  changes the state of the variable and manipulates the dom accordingly
        }}></input>
        {/* implementing search functionality */}
         {/* <button onClick={()=>{ */}
          {/* <button onClick={(e)=>{
            e.target.button=setTitle("food")
          }}>
            Change title
          </button>
          <h1>{title}</h1> */}
        {/* // }}>Search</button> */}
        {/* {
          if(clickedButton==="False"){
            setclickedButton("True button clicked")
            }
            else{
              setclickedButton("False")}
            
        } */}
        
        {/* <h1>{clickedButton}</h1>   */}
        {/* React recocilliation and virtual dom concept is behind this  ONLY A relevent portion of dom is getting updated diff algo in action*/}
        {/* it will be very non performent and lengthy if we implement that functionality in simple js using inner html and .value etc */}
        {/* that is kown as double binding reading and writing simentnously react hooks are built in functions*/}
        <div className="Nav-bar sticky" >
         <Title/>
         <div className="my-iems">
         {/* <h1>{title}</h1> we need the UI in sync with the state for that syncing we use a state variable or local state variable */}
      {/* https://upmostly.com/tutorials/react-onhover-event-handling-with-examples */}
      {/* https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/ */}
      {/* https://www.newline.co/@andreeamaco/how-to-use-react-onclick-events-in-class-and-functional-components--fb63a01e */}
      <ul className="Nav-list">
        <Link to="/about" className="link"> 
         <li onMouseOver={changeColor} onMouseLeave={sameColor} >      
         About-us
         </li></Link>
         <Link to="/" className="link"> 
         <li onMouseOver={changeColor} onMouseLeave={sameColor} >      
          Home
         </li></Link>
         {/* link exactly works like anchor tag */}
         <Link to="/contact" className="link">
         <li onMouseOver={changeColor} onMouseLeave={sameColor}>
         Contact-Us
         </li></Link>
         <li onMouseOver={changeColor} onMouseLeave={sameColor}>
          Our satisfied Customers
         </li>
         <li onMouseOver={changeColor} onMouseLeave={sameColor}>
          Cart
          {/* <img src="https://www.seekpng.com/png/detail/134-1344280_add-items-to-cart-minimalist-shopping-cart.png" className="cart"/> */}
         </li>
      </ul>
      </div>
      {login===false?(<Link to="/form/"><button onClick={()=>{
        setLogin(true)
      }}>Login</button></Link>) :(<button onClick={()=>{
        setLogin(false)
      }}>Logout</button>)}
      
    </div>
  </>  
  )
    

}
// this is Exporting module by default
export default Myapphead;
// 143
