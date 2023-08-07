import { Outlet } from "react-router-dom"
// import Profile from "./Profile"
import Profile from "./Classprofile"
import React from "react"
import FuncProfile from "./FuncProfile"
// const About=()=>{
//     return(
//         <div>
//             <h1>
//                 About us page
//             </h1>
//             <p> 😂 This is chapter no 07 Finding the path 😁😁😂</p>
//             <Outlet/> 
//             {/* children are always rendred in outlet  */}
//             {/* if we dont want to use outlet we can directly import our profile componenet and use it over here react will collect all the props an well attach it to this profile class react eill atttach to this this */}
//             <FuncProfile name={"Vibhu Mathur"} xys="kkkdj"/> 
//             {/* //props in functional componenet */}
//             <Profile name={"Vibhu Mathur given by class"} hobby={"Criket by class"}/>
//             <Profile/>
//         </div>
      
//     )
// }
// export default About
class About extends React.Component{
    constructor(props){
        super(props)
      console.log("parent-construter")
    }
    componentDidMount(){
        console.log("Parent-Componenet did mount")
    }
    render(){
        console.log("parent-render")
        return(
            <div>
            <h1>
                About us page
            </h1>
            <p> 😂 This is chapter no 07 Finding the path 😁😁😂</p>
            <Outlet/> 
            {/* children are always rendred in outlet  */}
            {/* if we dont want to use outlet we can directly import our profile componenet and use it over here react will collect all the props an well attach it to this profile class react eill atttach to this this */}
            <FuncProfile name={"Vibhu Mathur"} xys="kkkdj"/> 
            {/* its a function call or invokation like satement and it will go to that componenet during render method and trigger its life-cycle method of its children componenet
            Sequence of react life cycle methods 
            1st "PARENT CONTSTRUTER() WILL BE CALLED"
            2nd " parent render()"will be called 
            3rd "CHILD CONSTRUCTER WILL BE CALLED"
            4TH "CHILD RendeR WILL BE CALLED "
            5th "Child Component did mount will be called"
            6th "Parent componenet mount will be called"
            */}
            {/* //props in functional componenet */}
            {/* 
             Sequence of react life cycle methods for 2 child componenets
            1st "PARENT CONTSTRUTER() WILL BE CALLED"
            2nd " parent render()"will be called 
            3rd "first child construter will be called"
            4th " first child render will be called "
            5th " second child construter will be called"
            
            6th "second child render will be called"
            //DOM UPDATED FOR THE CHILDREN COMPONNENT
            7th " 1st child component did mouunt will be called"
            8th "2nd child component did mouunt will be called"
            9 th " then parent"component did mouunt will be called
            */
            // updation of atates etc always done in render method
            // reference https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
            // when react is rendering things uo 1st phase is the render phase second is the commit phase
            // render phase includes ur construter and the render method
            // commit phase is the place where actually react is modifying ur dom
            // now after my comp is rendered on the breowser then things inside componenet did mount is called 
            //so there are two phases when the recocillation is happening render and commit 
            //rebder phase is fast commit is slow react bactches up things render phase for these children 1st and second after that it calles componnent did mount as it may api calls which can dealy ur dom updattion
            //in the render phase the render is callled and construter is called  now we are exactly ready to put things into our dom and raect will upload static html 
            //and this jsx-html conversion is done by babael
            //in the commit phase after render  phase react actually updates the dom(Intial-one) and componenet did mount is called 
            // that is why we see shimmer effect during intial render as we do in conditinal rendering
            // before 1 st componenet did mount happens after that api call occurs and u see ur  updated componenet
            }
            <Profile name={"First-Child"} hobby={"pehala-baccha"}/>
            {/* <Profile name={"Second-Child"} hobby={"doosra-baccha"}/> */}
            {/* <Profile/> */}
        </div>
        )
    }
}
export default About
//  for routing u should have to create a routing configuration