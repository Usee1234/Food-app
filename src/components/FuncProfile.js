import { useState,useEffect } from "react";

const FuncProfile=(props)=>{
const [count,setCount]=useState(0) // this is how we decalre local state variables in used in functional componenet
const [count2,setCount2]=useState(9) // in functional componenets state will updates after intial reneder fiest of all our intial state will be rendred after that updated state is updates inside dom
// what if we give the same setinterval in useeffect how will it behaves like same as in class componenet so how will u tackle that performance lag and cleanup issue in useeffect there isa function which in use effect will be called with return and used when we are unmounting it
useEffect(()=>{
   console.log("use effect call afterr intial render second render")
  const timer= setInterval(()=>{
    console.log("set-Interval in use effect")
   },1000)
   return()=>{
     clearInterval(timer)
     console.log("third-unmount render")
   }
},[count])//infinite scroll
// useEffect(()=>{
//     console.log("use effect call afterr intial render")
//  },[count2])//infinite scroll
console.log("first-render")
return(
    <>
    <h1>
        {/* Profile wale ka naam hai:{ny.name}//u can pass any name */}
        Functinal compomnenets wala hu <br></br>
        Profile wale ka naam hai:{props.name}
        State variable value is{count},{props.xys}
    </h1>
    <button onClick={()=>{
        setCount(1)
        setCount2(2)
    }}>
       Click
    </button></>
)
}
export default FuncProfile;
//never ever compare react life cycle methods in classes with react functional componenets like Useeffect not equal to componenet did mount and w/o dep array it will be equal to componenetwillupdate use effect is not using componenet did mount bts its totally diffrent
//use effect with no dep array will be called after every render
//