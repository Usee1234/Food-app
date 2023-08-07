import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGE_CDN_URL } from "../config";
import { ITEM_IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const ResturentMenu = () => {
  // how to raed Dynamic url
  // const{id}=useParams() direct destructuring
  const params = useParams();
  const { resId } = params;
  const [restaurant, setRestaurent] = useState(null);
  useEffect(() => {
    getResturentInfo();
  }, []);
  
  async function getResturentInfo() {
  
      const data = await fetch(
        // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7999454&lng=75.8138096&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId
      );
      const response = await data.json();

      // console.log(response.data.cards[0].card.card);
      
      setRestaurent(response);
      console.log(restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[2]?.itemCards[0]?.card?.info?.name)
      // console.log(restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[3])
      // [2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      // console.log(restaurant.data.cards[0].card.card.info.name);
      // console.log(restaurant.data.cards[0].card.card.info.cloudinaryImageId)
      // console.log(restaurant.data.cards[0].card.card.info.id)
  //  catch (err) {
  //     console.log(err);
  //   }
  }
  // let myarr=restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[2]?.itemCards
  // console.log(myarr)
  // console.log(restaurant.data.cards[0].card.card.info.name);
  // const getResturentInfo=async()=>{
    // console.log(restaurant.data)
  // }
  // console.log(restaurant.data.cards[0].card.card.info.name)
  // const myrest=useState();
  // const[res,setRes]=myrest

  // console.log(resId);
  // if(!restaurant){
  //   return <Shimmer/>
  // }
  // for(let i=0;i<13;i++){
  //   console.log(restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[2]?.itemCards[i]?.card?.info?.name)
  //   console.log(restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[2]?.itemCards[i]?.card?.info?.description)
  // }
  let myarr=restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  if(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.length===undefined){
    return(
      <Shimmer/>
    )
  }
     for(let i=0;i<restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.length;i++){
      
      console.log(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[i]?.card?.info?.name
        )
     }
    console.log(myarr)
  return !restaurant ? (<Shimmer/>):((
    <> 
    <div className="mymenu">
      <h1>Resturent id:{resId}</h1>
      {/* {restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[2]?.itemCards.map((value)=>{
           let myarr=(Object.values(value)) //HOME WORK
           console.log(myarr[0].info.name)
           console.log(myarr[0]?.info?.id)
          //  console.log(myarr[0].info.description)
      })} */}
      
      <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2> 
      <img src={IMAGE_CDN_URL+restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}></img>
      <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}</h2>
      <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h2>
      <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
      <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h2>
      <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.areaName}</h2>
      <div>
      <h3 className="menu">
        Resturent-Menu
      </h3>
    </div>
        {
          myarr.map((value)=>{
            console.log((Object.values(value)[0].info?.name),(Object.values(value)[0].info?.description))
            
          })
        }
   
          {myarr.map((value)=>{
            return(
            <>
            <ul className="list">
            {console.log(Object.values(value)[0]?.info.name)}
             
              
              
             
             <li key={Object.values(value)[0]?.id} >{Object.values(value)[0].info?.name}</li>
             <li key={Object.values(value)[0]?.id}>{Object.values(value)[0].info?.description}</li>
             <img src={ITEM_IMG_CDN_URL+Object.values(value)[0].info?.imageId} alt="Meal-Image"></img>
             {isNaN(parseInt(Object.values(value)[0].info?.price)/100)?(<li>Rs 500</li>):(<li key={Object.values(value)[0]?.id}>Rs {parseInt(Object.values(value)[0].info?.price)/100}</li>)}
            </ul> 
             </>)
             
          })}
      
      
    </div>
  </>
   
//  {/* { restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[2]?.itemCards?.map((value)=>{
//            let myarr=(Object.values(value)) 
//            //HOME WORK

//              {myarr[0].info.name}
//           {myarr[0].info.description}
        
//       })} */}
  
  //  {/* {console.log(myarr)} */}

  ))
  
  
};
export default ResturentMenu;
