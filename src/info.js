// paracel just auto saves all the changes we done in our machine using HMR HOT MODULE REPLACEMENT
// how does hmr workes b/c it is USING something known as FILE WATACHER ALGROITHM WHICH IS WRITTEN IN C++
// WHICH ALL IS DONE BY USING PARCEL
// PARSEL Cache
//parsel uses parcel.cacahe to keep these minification,live server processes running it is parsels space and keeps ctrack of all the changes you made
// Parcel caches everything it builds to disk. If you restart the dev server, 
// Parcel will only rebuild files that have changed since the last time it ran. 

// Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, 
// and granularly invalidates the cache when something changes. For example, if you change a configuration file, 
// all of the source files that rely on that configuration will be rebuilt.

// By default, the cache is stored in the .parcel-cache folder inside your project. 
// You should add this folder to your .gitignore (or equivalent) so that it is not committed in your repo. 
// You can also override the location of the cache using the --cache-dir CLI option
// yoo can found whole log of parcel in :-https://parceljs.org/features/development/
// any thing which we genrate on server will be pushed inside your.gitignore folder eg node modules and .parcel cache
// PARCEL POINTS
// Created a server
// File watcher algorithm in c++
// HMR HOT MODULE REPLACEMENT
// BUNDLING
// MINIFY
// CLEANING OUR CODE
// DEV AND PRODUCTION BUILD 
// SUPER FAST BUILD ALGORITHM
// js and Image Optimization 
// Caching while devlopment  
// compression
// removing all the console.logs
// parcel is a zero config bundler you just give path then parcel do all html parsing in all using npx parsel simple.html    
// parcel uses consiting hashing algorithm to all that bundleing processess and these bundlers and dev dep acts as catalyst to make react fast
// make your code compatible to all browsers (older version of browsers )by adding pollyfills to it
// parcel gives us functallity to enable https on our local machine
// port no automatically change
// consitent hashing algorithm
// parcel takes time to change first as if some functinal dependeciey is changed but then after it takes less time for subsequent changes as it stored it in paresl cache
//  dist folder in parsel build all the production level files using that dist folder when we run npx parcel build simple.html run  it did minification 
// and bundling in production level also removing console.log files so parcel is a beast it can do many things 
// Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box. Minification reduces 
// the file size of your output bundles by removing whitespace, 
// renaming variables to shorter names, and many other optimizations.
// it is clearing our code and it also manages dev and production build and it is super fast and build algorithm 
// parcel does image optimization and js minification also 
// always production build  comes to the website through the server and it is done by parcel node modules are also minified when it comes to website
// Parcel automatically includes content hashes in the names of all output files, which enables long-term browser caching. Whenever the contents of a bundle changes, the hash included in the filename will be updated, triggering invalidation of CDN and browser caches.
// zero config 
// By default, all bundles include a content hash except entries and certain dependency types 
// that require names to be stable. For example, service workers require a stable file name to work properly, 
// and <a> tags in HTML reference user readable URLs. 
//  PARSEL USES TRANSITIVE DEPENDENCIES MEANS DEPENDENT ON ALL OTHER DEPENDENCIES TO PERFORM SUCH AMAZING TASKS AS A BUNDLER
import React, { Component } from "react"
// import ReactDOM from "react" 
import ReactDOM,{createRoot} from 'react-dom/client'
// createRoot will be exported as named import by react devlopers whereas ReactDOM is default export
// beacause we exported it by default while importing it doesnot need to have the same name like the file name but for no confusion u should keep file name same
// import Newheader from "./components/Myapphead"
// Default Import
// import { Title,Myapphead } from "./components/Myapphead.js"
// even if u make a jsx file it also can be used like this 
// import { Title,Myapphead } from "./components/Myapphead.jsx" but some libraraies track ur files using extensions so sometime this can brake when ur using ext lib
import Myapphead, {Title} from "./components/Myapphead"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from './components/About'
import Error from "./components/Error"
import Contact from "./components/Contact"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"  // it will help us create routing This is the recommended router for all React Router web projects. It uses the DOM History API 
import ResturentMenu from "./components/ResturentMenu"
import MForm from "./components/MForm"

import FuncProfile from "./components/FuncProfile"
// to update the URL and manage the history stack. It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
// createRoutesFromElements is a helper that creates route objects from <Route> elements.
//  It's useful if you prefer to create your routes as JSX instead of objects ...

// now we will be creating routing configruation
// const appRouter=createBrowserRouter([
//   {
//     path:"/",//showing the path
//     element:"" // what to show while routing the path
//   }
// ])
// but it wont work as applayout runs in a sequence so always create it after appLayout 

// import { IMAGE_CDN_URL } from "./config"
// import Shimmer from "./components/Shimmer"
// combination of both named and default
// Named Import
// import { Title,Myapphead } from "./components/Myapphead"
// import * as obj from "./components/Myapphead" 
// import Resturentcard from "./components/Resturentcard"
// all things/func componenets come from the above import from the file  to this file and u can acsees them any ehere
// console.log(obj.title)
// this is not object destructuring you cant use obj.title
// import { createElement as ce} from "react" 
//  const root1=document.createElement("div") 
// const heading=document.createElement("h1")
//  root1.setAttribute("id","root")
// const root=document.getElementById("root")
// heading.innerHTML="Hello";
// root.appendChild(heading)

// ----REACT CODING INTRO STARTS-------

// const heading1 = React.createElement("h1",
//     {
//         // passing props to react objects it can be any thing not just id ,class ,or styles
//         id: "title",
//         className: "inner", 
//         key:"h1"
//     }, 
//     "Hello through heading 1 FROM PARCEL")
// const heading3 = React.createElement("h3", {
//     // ce,createElement it is still messy so we can use jsx for the same code
//     id: "title",
//     className: "inner",
//     key:"h3"
// }, "Hello through heading 3 FROM PARCEL")
// const heading=React.createElement("h1",{},"Namaste-React")
// const list=React.createElement("ul",{className:"hghh",
  
// },[React.createElement("li",{},"About us"),
// React.createElement("li",{},"contact us"),
// React.createElement("li",{},"Docs")])
// const header=React.createElement("div",{
// className:"header"
// },[heading,list]) 
// const myhtml=(
//     <h1 className="intro" key="h2">
//       hEllo Vibhu
//       </h1>
//   )
  // jsx expresssion
// packagelock.json inside node modules keeps track of all dependencies of updated node modules
//  similarly there is all logs of TRANSITIVE DEPENDENCIES IN our packagelock.json of node modules
// babel comes as a dependency with parcel
// pain of using React.createElement it will mess up if we write a big html docs using this thats why JSX come and 
// also liitle messy jsx is not html inside javascript it looks like this but its not exactly this it looks like html but its not html
// so how does our JSX FILE EXECUTES THIS CODE THAT IS WE GONA SEE our browser doesnot understand this piece of js code which is written above 
// but babel knows you can find how babael transpiles jsx code using abstract syntax treee here https://babeljs.io/docs/babel-plugin-transform-react-jsx
// you can find all info about abstract syntax tree at  https://www.newline.co/@kchan/abstract-syntax-trees-the-magic-behind-compilers--35fdf06a#turning-jsx-code-into-an-abstract-syntax-tree
// what are diffrent usage of jsx expression jsx is a syntax
// how do u create a image tag in jsx, how h1 found out
// JSX=>React.createElement(transpiled or code modified by babel)=>object=>html=>DOM MANIUPULATION / SHOW THIS IS what done babel
//  for more react https://legacy.reactjs.org/docs/dom-elements.html
// advantages of JSX IS REadibality,Syntatical sugar,devloper friendilly code is written foe humans
// from now onwards we dont be using React.createElement we use jsx tags in react is known as react element


// const conatiner = React.createElement("div", { className: "container", id: "one" }, [heading1, heading3,header,myhtml])
// const root = ReactDOM.createRoot(document.getElementById("root"))
// // passing a REACT Element INSIDE ROOT
// root.render(conatiner);
// // console.log(heading1)
// console.log(conatiner)
// console.log(heading1)


// React Componenets
//there are two types of componenets in react
// 1:- Functional components New way of writing React code
// 2:-Class componenets older way of writing React code we will learn this tooo
// SKIP TO LINE NO 225 ---------''''''''''--------FOR FUNCTIONAL COMPONENETS
{/* <div class="header">
  <h1>Namaste React</h1>
  <ul>
    <li>About us</li>
    <li>Contact us</li>
    <li>Documentation</li>
  </ul>
</div> */}
// React.createElement creates an object=>object=>react or ReactDOM converts this objects converts into HTML AND RENDER IT ON DOM HTML(DOM)
// to make that production ready 
// we need to minify our files
// bundlers
// job of bundlers
// examples of bundlers webpack , vite,Parcel  we use parcel
// npm init to intilize package.json
// why do we use npm suppose we have to bundle files and modules,or to minyfy 
// the files,or to manage console loga or to optimize your apps 
// react app just does not run on its own many super powers come from diffrent packages
//  which is managed installed and preseented by pacakage managers suc as npm  those helper packages come inside npm
// INSTALLING PARCEL AS  A DEV DEPENDECIY
// there are many other dependencies also which installed w/o d as they are not dev dependencies
// npm install --save-dev parcel//npm install -D  parcel   as bundler   
// dev d means all the packages that my projrct needs that is the dependency parcel is one of such devloper dep  beacuse its 
// bundling all files  its dependency we need parcel i our devlopment enviorment 
// package-lock.json

// ~version “Approximately equivalent to version”, will update you to all future patch 
// versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.
// ^version “Compatible with version”, will update you to all
//  future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.
// if no carrot or tilndler is used then its means we want to install that exact version
// what is package-lock.json
// package.lock will lock the exact version of all the additonal dependices an keep it safe that it is on exact thet version
// packagelock.json it maiatains a hash of it as well that means what the exact version each dependeciy is using
// which is running on my systeam should also be matched with the production level code it maintains the integrity
// while pushing the code to production server you should include pacakagelock.json so that server will catch up all the modifications regarding 
// Node-modules
// it is the database of your npm
// how will parcel minify your code thriugh this threre is a dedicated file for this in it ie in node modules our app has a dependency on parcel 
//  parce has dependencies on some other things that is why they come in node modules like to ninify files the minifier dependecies are used
// so parcel dependencies are huge in size for older browser compatiblity it has broser list etc for
//  html parsing html parser etc and tons of dependencies and helper code
// so node modules are the one of the most important file 
// but should u push node M to git THE ANS IS NOOOO beacause they are to heavy and your packagelock .json has a exeact log of all dependecies 
// and it shouls be pushed to git so that on server we can regenrate our node modules again when needed so one copy of node module is in our sysyteam
// and we push package lock.json file in git that will help server to regenrate the files of node modules
// why we dont use cdn react because its fetching all the things from https://unpkg.com server whic makes our files a little more slow to adresses this
// we can install react and react dom in our local server with all react releeated files in node modules and as global dependency in package lock.json
// npx meaning execute parsel has given server to us but there wa sa erroer theow up 
// react is not defined so now we have to import react from our node modules NEVER -EVER TRY TO EDIT NODE MODULES OR PACAKAGE LOCK.JSON now we got an erroe
//  so give script tag an attribute module means its not a normal js file its module and module only can import and export
// 1:40
// cotent hashing algorithm
// Content hashing
// #
// Including a hash of a bundle’s contents is an important optimization for production 
// builds that enables browsers to cache loaded files indefinitely. When the contents of a bundle changes, 
// so does its filename, which acts as a cache invalidation mechanism. See the Content hashing docs for details about this.

// At the point bundles are being named, the final contents is not yet known, so Parcel provides a hashReference property on each Bundle object. This is an opaque placeholder value that will later on be replaced with the actual hash when writing the final bundles. Use this in returned bundle names to include a content hash.

// Make sure to check the bundle.needsStableName property before including a hash. 
// When this is true, a dependency is expecting the filename of the bundle to remain consistent over time. 
// For example, service workers require their URLs never to change, and users 
// expect visible URLs like HTML pages to be human readable and remain consistent.
// file watcher
// To support an optimal caching and development experience Parcel utilizes a very fast watcher 
// written in C++ that integrates with low-level file watching functionality of each operating system. 
// Using this watcher Parcel watches every file in your project root (including all node_modules). 
// Based on events and metadata from these files, Parcel determines which files need to be rebuilt.
// 2:40
// we can include browser compatiblity by including it in package.json and then parcel will handle only these browsers onlyss
// whole log can be found in https://browsersl.ist/#q=defaults+and+supports+es6-module%2Cmaintained+node+versions
// Home-work npm init -y,find all types of scripts attributes
// Profiling and tracing

// Tracing
// #
// CPU profiling or sampling profiling generates a profile which tracks execution of JavaScript during the build, and can be used to identify parts of the codebase and where time was spent in it during the build. Tracing is a higher level profile, that tracks specific phases of Parcel's execution, which plugins were called into, and how long is spent in each.

// A Parcel trace can help you to optimize your build by answering questions such as, "Which plugin is taking the most time during my build?" or "Which file in my project takes the longest to transform?". These questions are not as easy to answer with the data provided by a CPU sampling profile, but can be answered with a Parcel trace.
// code-spliiting
// js-optimization
// The overhead of running a trace is relatively minimal, but is non-zero - it's certainly less expensive than running a sampling profile during the build. In particular, the JSON file produced can be quite large depending on the numbers of plugins you are using and the size of your build. Consider these factors when deciding when to enable tracing.
// react and react dom are normal dependencies
// Meaning of assigning functinalities in broserlist is not mean that it is not compatible with other beowser but it means that it will definately 
// work with these  specified browsers it might not work with other browsers some functionalites of web app but some functionalities can work also Babel automatically write 
// the polyfill of that older version of browser to run that new functioliities write code replacement or polyfill for it by babel
// What is Babel:- It is a node or Java s package which takes our nrewer js code in black-box and convert it into older browser compatible code
// git init intilize your app or web-app git upload ready push ready
// Tree shaking:- Means removing unwanted code parcel will ignore all the unsued code ie unused node-modules to transfer to production build so that only
// used production code will go to production minifing the xetra loading lugggage almost all bundlers like webpack,vite can do the same functionalites what pacel did
// npm commands are used when you want the things installed inside youur project like installing dependencies
//  npx is used to execute the packages whitout downlodaing them npx =npm run if you do npx run build after assighning it in package.json it will ask you to install 
//  build intilization packages to  run the build version so npx will ececute the intiliaztion processe 
// of file w/o downloading it wheather npm will install the packages first shrt cut to run npm run start npm start
// parcel directly dont remove all console.logs while minification and compression it is actullay configured by 
// babael thres is a package which helpes us remove console in babael parcel dont do it by itself we need to configure it (that plugin)?( )
// whenever thres is an array in my react.ctrate elemrnt or we passing componeents as children as siblings Componenet then you should always give them keys why hres the log https://legacy.reactjs.org/docs/reconciliation.html react tracks 
// this key is a unique thing you cant apply same key for 2 children
// reneder means loading the children root in dom
// Functional Component A functional copmponent is nothing but a Normal js function which will return a PIECE OF JSX CODE or A react element
// Name of functional componenet starts with Capital letter its not mandotry but its good practice to follow the convention when the 
// jsx code is of mutiple lines wrap that in ()is very important
const myhtml=(
  <h1 className="intro" key="h2">
    {console.log("hello")}
    hEllo Vibhu THIS is a react element
    </h1>
)
// const data=api.getdata(); 
// data coming from an api suppose melcious js code entred in it by hacker (xss attack) now ur 
// server will ecxecute that js can be proned to threat but jsx amamzingly santize ur code and prevent such activites sanitization
const Myhtml2=()=>(
 
  <h1 className="intro" key="h3">
      Hello from another functional component
    </h1>
)
var chull=89;
const HeaderComponenet=()=>{
  return (
    // <div>
    // jsx will create an error yo can ony have one parent inside one functional componenet
    // </div>
    <div>
      {myhtml} 
      {/* invoking react element */}
       {/* we passed react element like this b/c its a normal variable */}
      {Myhtml2()} 
      {console.log("any js code")}
      {/* {data} */}
      {/* func comp can be called like a function also */}
      {/* any piece of js code can be renedred on dom using{} */}
      {/* {{
        name:"vibhu" 
        become objects
      }} */}
      {chull}
      <Myhtml2 /> 
      {/* /* if you have to use a componeent inside componenet its called componeent compostion * Component composition is the name for passing components as props to other components/} */}
      <h1>Namaste React FUNCTIONAL copmponent</h1>
      <h3>HELLO</h3>
    </div>
  )
}

const Mynav=()=>{
  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial",
  //   marginBottom:"30px"
  // };
  return(
  <div>
    <div  className="intro" >
      {/* {{mystyle}} */}
      <div className="logo" style={{borderRadius:"80px"}}> 
      <img src="https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?w=2000" alt="logo"
       width={100}
       height={100}
       style={{borderRadius:"60px",marginLeft:"50px",marginTop:"5px"}}/>
      </div>
       {/* <label htmlFor="my-name" style={{marginLeft:"20px"}}>My Name:</label> */}
       {/* JSX IS NOT MANDOTORY
       YOU CAN MAKE SAME THING USING REACT.createElement
       Typescript is also not mandotry
       even react is not mandotry
       u can make only a particular piece like footer etc using react of ur web app by just giving
       const footer=ReactDOM.createRoot(document.getElementById("footer)) 
       {/* https://timmousk.com/blog/react-label-for/ */}
       <div className="my-s">
       <input type="text"style={{marginLeft:"450px",borderRadius:"40px",marginBottom:"50px"}}
      //  inline-styling in css
       className="search"
        placeholder="Explore Namaste-JavaScript"></input>
        </div>
        {/* log https://bobbyhadz.com/blog/react-style-border */}
       {/* style={{border: '1px solid red', borderRadius: '30px'}} */}
       <div className="profile">
       <img src="https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg" alt="logo"
       width={100}
       height={100}
      
       style={{borderRadius:"60px",marginLeft:"450px"}}/>
       </div>
       <div>
      {/* <Myhtml2/> */}
       </div>
    </div>
    {/* <HeaderComponenet/> */}
  </div>
  )
}
const Repeat=()=>{
return(
<div>
    <h1>
      <Mynav></Mynav> 
      {/* this is also a way to render react functinal componeent */}
      hello
      <Mynav/>
    </h1>
</div>
)
}
const Repeat1=(
  <div>
    <h1>
      trtst
    </h1>
    <Repeat/>
    </div>
)

// const HeaderComponenet2=()=>(
  
//     <div>
//       <h1>Namaste React FUNCTIONAL copmponent</h1>;
//       <h3>HELLO</h3>
//     </div>
// )
// same way of writing func Component w/o return

// const myhtml=(
//       <h1 className="intro" key="h2">
//         hEllo Vibhu
//         </h1>
//     )
// console.log(typeof(myhtml))
  // the code above is react element whic is a normal java script variable of type object
// const root = ReactDOM.createRoot(document.getElementById("root"))
// // passing a REACT Element INSIDE ROOT 
// render method is diffrent for functinal componenets its like this <componenet/>
// console.log(typeof(HeaderComponenet))
// root.render(HeaderComponenet());
// root.render(Repeat1);
// root.render(<Myapphead/>);

// How do you use Keys in react lists
// Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.

// To better understand this, let’s refactor the code snippet we saw earlier, to now include keys.
// React.createElement always gives an object to us
// why we need func comp we need to pass some props like yhis props={}
// in node modules somewhere or the other their is written export react ,react DOM THAT why we are able to import it as libraray type=module in script
// why 302 redirect happens when we import react from cdn b/c its a network call
// use fue coomands and parcel blew up but we can add some configurations also parcel is a dev dep and jsx and baabel come with it dist folder comes into the browser
// not the whole production code of node modules that is genrated using package .json and pack lock.json dist ka build version client ko ship hoga as webapp
// which is minified code production ready code 
//  babael is a compiler which makes pollyfill convert newer code to older browser compatible one babael convert it into plane js es6 code
// babel code ko create react Element ma convert karega create react Element 
// react ko samajah aaata hai or wo usko object ma convert karta hai jo ki plane js
//  hai fir react dom us obj ko further HTML ma convert karta ha then it is rendered to DOM by react Dom
// const a=(
// <h1>heelo</h1>
// ) this is understandable by babael=> create element understood by react
// react.create=>react element
// jsx=>react.create=>react element jsx uses react.crete elem bts to create obj react app is lighter than html csss js
// my food delivery app project======------

//  Header
//   -Logo
//   -Listitems(Right-side)
//   -Cart
//  Body
//   -Serach Bar/nav Bar
//   -Resturent List
//     -Resturent cards
//        -Image
//        -Resturent-Name
//        -Pricing
//        -star-rating
//        -cusines
//   Footer
//    -Links
//    -CopyRight
// const config=[
//   // for corousel
//   {
//     type:"Carousel",
//     cards:[
//       {
//         offerName:"50% off",
//       },
//       {
//         offerName:"0 delivery charge"
//       },
//     ]
//   },
//   {
//     type:"Resturents",
//     cards:[
//       {
//       image:"https://b.zmtcdn.com/data/pictures/chains/6/20602876/b7273fb87eb42f49b74135b686765f13_o2_featured_v2.jpg?output-format=webp",
//       name:"RollsKing",
//       items:[{
//         one:"Rolls"},{
//         two:"Bevrages"}
//     ],
//       rating:"4.2 "
//   },
//   {
//     image:"https://b.zmtcdn.com/data/pictures/chains/6/20602876/b7273fb87eb42f49b74135b686765f13_o2_featured_v2.jpg?output-format=webp",
//     name:"RollsKing",
//     items:[{
//       one:"Rolls"},{
//       two:"Bevrages"}
//   ],
//     rating:"4.2 "
// },
//  ]
//   }
// ]



    {/* https://upmostly.com/tutorials/react-onhover-event-handling-with-examples */}
    {/* https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/ */}
    {/* https://www.newline.co/@andreeamaco/how-to-use-react-onclick-events-in-class-and-functional-components--fb63a01e */}



// optional chaining home work

// Resturentcard COMPONENET

// const Resturentcard=({name,cuisines,cloudinaryImageId,
//   maxDeliveryTime})=>{
  // const Resturentcard=({name,cuisines})=>{
  // const Resturentcard=({hotel})=>{ 
  //   // you can pass directly the destructured object as paremeter to ur functional copm as props
  //  const {name,cuisines,cloudinaryImageId,maxDeliveryTime}=
  //  hotel.data.data
  // //  jis object ko destructure karna hai wo as a parameter variable pass kar do kyuki usi naam ka object banega props ma
  // return(
    
  //   <div className="card">
  //     {/* <a href="/"> */}
  //      {/* {console.log(props)}  */}
  //     <a href="/" className="first" id="my link">
  //     <img className=" onecard" src={IMAGE_CDN_URL+
  //     cloudinaryImageId} alt="resturent-image"></img> 
  //     {console.log()}
  //     </a>
  //     {/* props.resturant.data.data?.cloudinaryImageId} alt="resturent-image"></img>
  //      </a>
  //     </a>
  //    <div className="content">
  //     {/* <h4>{Resturantlist[1].data.data?.name}</h4>  */}
  //     {/* <h4>{props.restaurant.data.data.cuisines.join(", ")}</h4> */}
  //     {/* <h5> {rollsking.items[0].one},{rollsking.items[1].two} </h5>       */}
  //   <div className="rtc">
  //     {/* <p> {Resturantlist[1].data.data?.maxDeliveryTime} Minutes</p> */} 
  //     {/* <p> {props.resturant.data.data?.maxDeliveryTime} Minutes</p> */}
  //     <h4>{name}</h4>
  //     {console.log(name,cuisines)}
  //     <p>{cuisines.join(" ")}</p>
  //     <div className="deep">
  //     <p> {maxDeliveryTime} Minutes</p> 
  //     <p>{rollsking.rating} Stars</p>
  //     </div>
  //   </div> 
  // </div>                                              
    
  // )
  // }
  // props inside REACT whatever u pass over here as a react attribute into my functional componenet or 
  // class componenet this is a way of passing data into ur comp from parent to child componennt
  // u passing arguments ur recieving parameters
  //   function fun(ttt,hhh){

  //  }
  //  fun("rrr","xxx")
  // at the end of the day func comp are just function and its like passing arguments as props inside ur functional componenets
  //  calling resturant card with props as argument and also pass as parameter inside resrurent card remeber props always return a object
  // can we pass multiple props yes i am passing every time some new data  or different daprops.restaurantfun call Resturentlist

            // BODY  componenet

// const Body=()=>{
//   return(
//     <div className="myrest">
//     {
//       Resturantlist.map((restaurant)=>{

//         console.log(...[restaurant.data.data.name])

//         // let prop={...[restaurant.data.data]}
//         // console.log({...prop})
//         return(
//           <>
//           <Resturentcard hotel={restaurant} key={restaurant.data.data.id}/>
//           <Resturentcard hotel={restaurant} key={restaurant.data.data.id}/>
//           </>
//         )
//       })
//     }
    {/* why dont we use index as a key never use index as key no key<<<<<index key(use only if you dont have any key )<<unique key (best practice)
    https://reactpatterns.js.org/docs/indexes-as-a-key-is-an-anti-pattern/ */}
    {/* <Resturentcard resturant={Resturantlist[0] } />
    {/* {console.log(Resturantlist[5])} */}
    {/* {Resturentcard(Resturantlist[0])}  same as function call  */}
     {/* <Resturentcard resturant={Resturantlist[1]}/>
    <Resturentcard resturant={Resturantlist[2]}/>
    <Resturentcard resturant={Resturantlist[3]}/> 
    <Resturentcard resturant={Resturantlist[4]}/> 
    <Resturentcard resturant={Resturantlist[5]}/>
    <Resturentcard resturant={Resturantlist[1]}/>
    <Resturentcard resturant={Resturantlist[2]}/>
    <Resturentcard resturant={Resturantlist[3]}/> 
    <Resturentcard resturant={Resturantlist[4]}/> 
    <Resturentcard resturant={Resturantlist[5]}/>
    <Resturentcard resturant={Resturantlist[3]}/> 
    <Resturentcard resturant={Resturantlist[4]}/> 
    <Resturentcard resturant={Resturantlist[5]}/>  */}
    
    {/* <Resturentcard {.
    ...[Resturantlist[0].data.data]}/>
    <Resturentcard {...[Resturantlist[1].data.data]}/> */}
    {/* we can also use spread opretor for the same by spreading my objects */}
    {/* <Resturentcard name={Resturantlist[5].data.data.name} cuisines={Resturantlist[5].data.data.cuisines} /> */}
    {/* <Resturentcard />
    <Resturentcard/>
    <Resturentcard/>
    <Resturentcard/>
    <Resturentcard/>
    <Resturentcard/> */}
    {/* 1;20 */}
    {/* {/* we control our frontend using backend and api using config driven ui HOW YOU DESIGN IT for example we have to site only those resturents  */}
    {/* for a jaipur user that exist in jaipr}  swiggy zomato may be use their unique city no to grab the backend data of paticular ui and render it on frontend using config drivrn u2*/}
//     </div>
//   )
// }

const Applayout=()=>{
  return(
    // <React.Fragment>
    // <Myapphead/>
    // <Body/>
    // <Footer/>
    // </React.Fragment>
    <>
    {/* <obj.Myapphead/> */}
     <Myapphead/>
     <Outlet/>
     {/* bascilly the outlet where i have to fill in diiffrent pages this outlet will be filled by children configruation  */}
    <Footer/>
    {/* <Shimmer/> */}
    {/* <About/>
     <Contact/>
    <Body/> */}
    </>
    // Short hand for react.fragment
    // any piece of jsx componenet we write it  should be in only one parent so if u want to render them 
    // properly u have to define a extra div as a parent inside root div to avoid that condition we use 
    // React.Fragment which is a componenet which is exportred ny react
    // jsx can only have one parent i dont my div as my parent elemrent then we use React.Fragment which is coming from the same react library
    // React.Fragment is acting like a empty tag you give me a config mu ui will render it automatically

  )
}

// These are called Nested Routes the contenet in the outlet shiuld change all the children  will go into my  outlet

const appRouter=createBrowserRouter([
  {
    path:"/",//showing the path ise particular path se ye componenet render hoga
    element:<Applayout/>,// what componenet to show/route while routing the path appLayout is our pricipal page so errorelement always displayed here 
    //  so u have to pass ur body also as children to get the body 
    // our reconcillation algo takes care of every thing what needs to be route react router dom takes care of everything whenever we have to do a dynamic or 
    // condtinal routing we use outlet  it is a named export functional componenet like a container and sequencing not matter in case of this u can just use outlet also
    // even we can erase header and footer
    //applayout in sabka parent ha uske andar outlet banega jisme ye sare children componenet render honge
     errorElement:<Error/>,
     children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
        children:[
             {
              path:"profile",    //u dont have to give a / over here parentpath/{path} localhost:1234/about/profile / means from the root
              element:<FuncProfile  name={"Vibhu Mathur"}/> //these childrens are always rendred in my outlet and outlet should always be created in the parent
             }
        ],
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/resturent/:resId",
        element:<ResturentMenu/>,  // dynamic routing
      },
      {
        path:"/form",
        element:<MForm/>,  // dynamic routing
      },
     ],
  }, 
  // {
  //   path:"/about",//showing the path
  //   element:<About/>,   // what to show while routing the path
  // }
])
// now we need to provide this appRouter to our app
// react router configration is  takes  (lists of path each path is an object)an array
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>); //as a props remix dev has done them similarly named export is also done by remix devlopers
// now whatever the root will render it will render according to this method/or configruation for taht we will use router
//  provider and this router provider will use this router config or as prop as appRouter where all brain of routing lies
// router provider is used to render the appRouter or to render according to my router 
// const obj1={
//   name:"vibhu",
//   surname:"Mathur"
// }
// const obj2={ key1:{
//   name:"TDE",
//   surname:"Ma"
// }
// }
// console.log(...obj1.name)
// console.log(...[Resturantlist[0].data.data])
// console.log(...[obj2.key1])
// console.table(...obj2.key1)
// console.log(...obj2)
// console.table(...obj2)
// Virtual Dom is a represntaion of our Actual dom with us is known as Virtual dom
// we need virtual dom for the purpose of reconcilation which is an algorithm  used by react to diffing one tree from other(found out the diffrence between the trees virtual dom vs actual dom only changes or rendred the diffrent thing algorithm)
// multiple children with same attribute or tag it will only rerendered the specific portions of ur app which is foundeded by diff algo
// hw virtual dom,reconcillation,React fiber React-16 diffing algo change its a new reconcillation engine Responsible for diffing now
// why we use a key in react to make diffrence and rerender the multiple children with same attribute or tag it will otherwise react will get confused in case of same attributes
// and react will rerender the whole portion but by giving keys it will rerender the required one only https://github.com/acdlite/react-fiber-architecture
// The algorithm React uses to diff one tree with another to determine which parts need to be changed.
// const range=function(a,b){
//   let arr=[];
//  for(i=a;i<=b;i++){
//  arr.push(i);
//  }
//  return arr;
// }
// console.log(range(1,10));
// function x() {
//   for(var i = 1; i<=5; i++){
//   function close(i) {
//       setTimeout(function() {
//       console.log(i);
//       }, i*1000);
//       // put the setT function inside new function close()
//   }
//   close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
//   }
//   console.log("Namaste Javascript");
// }
// https://github.com/alok722/namaste-javascript-notes/blob/master/notes/lecture-12.md   https://www.geeksforgeeks.org/reactjs-virtual-dom/
// x();




// react is so fast beacuse it has so faster DOM MANIUPULATION USING REACT RECONCILLATION ,FIBRE ETC,diff algo it dectects the change and just chNGE THAT
//  we will try to use export default exporting  multiple functional componenet using componenet compostion in export default when to use named import and when default its told later in course
// react will omly tracke that variables which are my local state variables not all variables how we create these variable using use state hooks




// what are  MICRO-SERVICES-ARchitetecture
// how this this food app lie in this architecture ita basically a part of UI Micro-services 
// all this come from a diffrent port on which they are deployed but with the same domain name and vice-versa can be happen or both can be diffrent port and domain name
// and they can call each other using these diffrent URLS
// Now we will Explore the world we will now communicate with other micro services using our UI MICRSERVICES SUCH AS BACKEND SERVICES ETC
// easy to maintain and deploy
// sapration of concern
// in uber a lot of micro-services were written in go-lang
// can be used diffrent tech-stack in every small microservices it saprated from each other
// https://www.talend.com/resources/monolithic-architecture/
// https://microservices.io/   



// INTRODUCTION TO React ROUTER 
// Two types of routing their are two types of routing 
// 1> Client site routing new one go to the about page and dont make a network call it is there in our app already
// 2> SErver site routing all page scome from my server older one
// we are building a single page applications (SPA) with spa our application does not reload it not make a network call when we arree changing pages 
// it should make a network call and fetches it for making spa and faster routing we imports link from reactv router dom
// this link tag is a anchor tag at the end of the day but an anchor tag with a mind brain its acting like a state variable react roter dom is keeepinga 
// a track of all of these converted links the code in behind is alraedy written by remix devlopers but anchor tag is something that a browser understands
// now how we can route through diffrent routes w/o vanishing my header componenet i will have to make that about page children of appLayout to do so come inside my appLayout 
// it should be children of applayout
// Dyanmic routing
// The main difference between static vs. dynamic routing is the time at which the routing takes place.
//  In dynamic routing, routes are initialized dynamically when the page gets rendered.
// This means almost everything is a component in the React Router. 1:53 unnamed routing using diffrent ids like path:"/happai1239" like for jaipur they have diffrent route so on so
// forth alwasys apply a filter inside a route onclick filter it will route u in dynamic routing we dont know on which page we route 
// make components for every logic that will help u make ur code moduler,readable,maintainable,reuseable,testable




// CLASS BASED COMPONENETS

