import { IMAGE_CDN_URL } from "../config";
import { useEffect, useState } from "react";
const rollsking={
  image:"https://b.zmtcdn.com/data/pictures/chains/6/20602876/b7273fb87eb42f49b74135b686765f13_o2_featured_v2.jpg?output-format=webp",
  name:"RollsKing",
  items:[{
    one:"Rolls"},{
    two:"Bevrages"}
],
  rating:"4.2 "
}

const Resturentcard=({hotel})=>{ 
  
    // you can pass directly the destructured object as paremeter to ur functional copm as props
   const {name,cloudinaryImageId,maxDeliveryTime,}=
  //  hotel?.data.data
   hotel?.info
  //  console.log(hotel)
   const {cuisines}=hotel?.info
  //  ideally before calling useEffectin ui our previous data should render but due the fact their is mismatch in destructuring of both objects it cant be seen clearly
  //  jis object ko destructure karna hai wo as a parameter variable pass kar do kyuki usi naam ka object banega props ma
  return(
<>
   
    <div className="card">
      {/* <a href="/"> */}
       {/* {console.log(props)}  */}
      <a href="/" className="first" id="my link">
       <img  src={IMAGE_CDN_URL+
      cloudinaryImageId} className=" onecard" alt="resturent-image"></img>
      {/* {console.log(hotel?.data.cuisines.join(" "))} */}
      </a>
      {/* props.resturant.data.data?.cloudinaryImageId} alt="resturent-image"></img>
       </a>
      </a>
     <div className="content">
      {/* <h4>{Resturantlist[1].data.data?.name}</h4>  */}
      {/* <h4>{props.restaurant.data.data.cuisines.join(", ")}</h4> */}
      {/* <h5> {rollsking.items[0].one},{rollsking.items[1].two} </h5>       */}
    
    <div className="rtc">
      {/* <p> {Resturantlist[1].data.data?.maxDeliveryTime} Minutes</p> */} 
      {/* <p> {props.resturant.data.data?.maxDeliveryTime} Minutes</p> */}
      <h4>{name}</h4>
      {/* {console.log(name,cuisines)} */}
      
      {/* <p >{hotel?.data.data.cuisines.join(",")}</p> */}
     {
      
      <p >{cuisines.join(", ")}</p>
      }
      <div className="deep">
      <p> {maxDeliveryTime} Minutes</p> 
      <p>{rollsking.rating} Stars</p>
      </div>
    </div> 
    
  </div>                                              
</>   
  )
  }
  export default Resturentcard;