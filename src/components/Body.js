import { Resturantlist } from "../config";
import Resturentcard from "./Resturentcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Menucard from "./Menucard";
import { Link } from "react-router-dom";

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data.data?.name.toLowerCase().includes(searchText.toLowerCase())
//   );
//   return filterData;
// }

//  function filterData(searchText,restaurants){

//       const myfilter=restaurants.filter((outlets)=>
//        outlets?.data.data?.name.toLowerCase().includes(searchText.toLowerCase())

//         )
//       // console.log(myfilter)

//       return myfilter
// response?.data?.cards[2]?.data?.data?.cards
//   }
function Comp({ props }) {
  if (props === 0) {
    return <h1>Resturants Not found</h1>;
  }
}

function filterData(searchText, restaurants) {
  // value.data.data?.name.toLowerCase().includes(searchText.toLowerCase())===true previous condition
  const myfilter = restaurants.filter((value, array) => {
    if (
      value?.info?.name.toLowerCase().includes(searchText.toLowerCase()) ===
      true
    ) {
      // console.log(value.data.cuisines)

      return value;
    } else if (
      value?.info?.name.toLowerCase().includes(searchText.toLowerCase()) ===
      false
    ) {
      console.log("no outlets found");
    }
  });

  // console.log(myfilter)

  return myfilter;
  // there is an error before beacause filter data is returning nothing
}

// let arr=[45,67,89,90]
// const a= arr.filter((value)=>{
//   if(value>100){
//    return value }
// })
// console.log(a)
// Array.filter((value)=>
// console
// )

// CALLING THE API AS AND WHEN MY PAGE LOADS IT USED TO CALL THE API AND FILL THE DATA
// HOW AND WHERE WE DO THIS IN REACT
// 1ST APPROCH SUPPOSE USER LOADS THE WEBAPP=>FIRST FETCHES THE API(300mS)=>PAGE RENDERS=>(200MS)=>SHOW PAGE
// 2ND APPOROACH USER LOADS THE WEBAPP=>RENDERING OF STATIC UI IS DONE FIRST(200MS)=>SO THAT USER CAN SEE SOMETHING ON APP=> useEffect called here API CALL(300MS)=>Show page
// which is better the 2nd one b/c it is more user engaging to the same React gives us another hook which superpowerfull hook named as USEEFFECT HOOK
// IT is just a normal function or a higher order function that is capable of taking call back functionalities this call back will be called not immedietly but
// whenever my used effect want it  to be called if we dont give any thing in dependency array it will call the callback fun after Every rerender
// every rerender again & again when will my componenet render either my state changes and also on my props changes but we dont want to call it in every rerender the fetch
// will only calle once the user reloads so for this purpose we passin a empty dependency array into it u
// se effect takes 2 parameters one is cb fun and other is dep  array if there is no dep array it will be called only one time after intial render so page will render fisrt then use effect is called
// any thing which u wanted to do if is a function of state variable or depends on it u integrate
//AGAR apane use effect ki arrray ma kuch diya hi nahi then it will bw called after each and every intial render
// use effect with it state control ke according data change hoga

// const Comp=({props})=>{
//   if(props===0){

//     return(

//       <h1>Resturants not found</h1>
//     )
//   }
//   else{
//     console.log("data found")
//   }
// }
// const data=useState();
// const[mydata,setMydata]=data

const Body = () => {
  // how do u avoid rendering a componenet

  let settext = "Search";
  // but u should no call ur api in body like here fetch() it will call the api on every rerender done by
  //  use state hooks on every state change which was a mess
  // Resturantlist

  const [Allrestaurants, setAllResturants] = useState([]);
  const [Filteredrestaurants, setFliteredResturants] = useState([]);
  // const[Filteredmenus,setFliteredmenus]=useState([])

  // this variable is directly linked to a particular state of the variable if states changes
  // Resturantlist is passed in hook as default state of variable
  const [clickedButton, setclickedButton] = useState("False");
  const [searchText, setsearchText] = useState("Food-Explorer");
  // const[mycount,setmyCount]=useState(0)

  // useEffect(()=>{
  //   console.log("Call this when empty state depenedency is changed")
  // },[])
  // useEffect(()=>{
  //   console.log("Call this when searchText state depenedency is changed")
  // },[searchText])
  // useEffect(()=>{
  //   console.log("Call this when Resturentlist state depenedency is changed")
  // },[restaurants]) //so while making an api call it should have a empty dep array so that it should not rerenders in any state change(only changes ones after intial render)
  // in empty dependency or no dep passed=>once after every re-reneder it will called every time as the state changes
  // useEffect(()=>{
  //   myapi();
  // })  like this
  // if u wanted to control any fun via state change so u can run useeffect or to render something accordingly after start of  browser starts rendering the data
  // important points about hooks
  // Never write a if-else  inside useState componenet never inside a for loop it lead to inconstiency
  // use state is a hook which react gives u to create local state variables inside ur functional componenets
  // never create use state outside ur functional componenet react will not allow u to do so always create it inside func comp

  // if(){
  //   const [test,setTest]=useState("klks")
  // }
  // React never allows creating a componenet inside componenet u can compose a component but not create it
  // const mycom=()=>{
  //   const nested_comp=()=>{ // dont craete it inside body but u can nest componenet insude return as it will become the part of parent componenet
  //     return(
  //       <h1></h1>
  //     )
  //   }
  //   return(
  //     <h1></h1>
  //   )
  // }
  // u can create as many useEffect as u can more then one also
  useEffect(() => {
    //API CALL
    callApi();
  }, []);
  const callApi = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7999454&lng=75.8138096&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      console.log("via useEffect");
      // console.log(response)
      setAllResturants(
        response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFliteredResturants(
        response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      for (let i = 0; i < 10; i++) {
        // optinal chaining
        // setResturants(response?.data?.cards[2]?.data?.data?.cards[i])
        console.log(response?.data?.cards);
        console.log(
          response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants[i]?.info?.name
        );
        console.log(
          response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants[i]?.info?.cuisines
        );
        console.log(
          response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants[i]?.info?.id
        );
        console.log(
          response?.data?.cards[2]?.data?.data?.cards[i]?.data?.cuisines
        );
        console.log(
          response?.data?.cards[2]?.data?.data?.cards[i]?.data
            ?.cloudinaryImageId
        );
        console.log(
          response?.data?.cards[2]?.data?.data?.cards[i]?.data?.maxDeliveryTime
        );
      }
      console.log(response?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
      if (!Allrestaurants) {
        return <h1>SORRY WE ARE TRYING TO FETCH RESTURAENTS</h1>;
      }
    }
    // here CORS error occurs it says we wont let u call swiggy like this install CORS CHROME to bypass THIS CORS ERROR
  };
  // dep array [searchText]=>once after render+everytime after my serachText's state changes
  //  function count(){
  //   return setmyCount(mycount+1)
  //  }
  {
    console.log("hello trsr");
  }
  console.log("render 1stddd");
  // if this useEffect is not dependent on anything it will be called just once
  // now this useEffecthook is dep on searchText whenever my searchText changes it calls the cb function
  // function filterData(searchText,restaurants){
  //   restaurants.filter((arr)=>{
  //     let my= arr.data.data.name.toLowerCase().includes(searchText)

  //    if(my===true)

  //    console.log(arr)

  //     return arr
  //   })
  // }

  return (
    <>
      <div className="searchit">
        <input
          id="myinput"
          placeholder="Search-Resturants"
          value={searchText}
          onChange={(e) => {
            //  there is one way data binding in react
            setsearchText(e.target.value);
            console.log(searchText);
            //  always use set keyword for setting at last that state gonna save in oue searchText variable only
            //  settext=e.target.value
            //  console.log(settext)
            //  changes the state of the variable and manipulates the dom accordingly
          }}
        ></input>

        {/* { if(!Allrestaurants){ return null}} */}
        {/* implementing search functionality */}
        {/* use state hook can do two major things first it can change value of local variables and secondly it can change the state of a paticular dom element */}

        <button
          onClick={() => {
            const dats = filterData(searchText, Allrestaurants);
            console.log(dats);
            // const data=Filteredmenus(searchText,Allrestaurants)
            // function Filteredmenus(searchText,hotels){
            //   const filtermenu=hotels.filter((value)=>{
            //     const khana=value.data.cuisines
            //     for(let i=0;i<khana.length;i++){

            //       if(khana[i].toLowerCase()===searchText.toLowerCase()){
            //         console.log(value)

            //         return value
            //       }

            //     }

            // if(dats.length===0){
            //   // const data=Filteredmenus(searchText,Allrestaurants)
            //   // setFliteredmenus(data)
            //    console.log("galat",dats.length)
            //   //  console.log(data)
            //   {<Comp/>}
            // only js expresssions work inside jsx u cant write js statements inside jsx
            // }

            setFliteredResturants(dats);
            console.log(dats);

            //need to  filter data on click after clicking render the updated reasturant FILTER THE REASTURANT list on resturant card
            // we cant update it directly we need to make a state variable for this
            //  need to filter the data
            // update the state of resturants
          }}
        >
          Search
        </button>
      </div>

      {function getfilteredrestuents() {
        return Filteredrestaurants.length;
      }}
      {/* {setclickedButton("bhhh")} */}
      {/* too many rerender error */}

      {/* {console.log(restaurants)} */}
      {/* if(clickedButton==="False"){
        setclickedButton("True button clicked")
        }
        every time a hook is made and its value is set using set key word the function called and react rerenders whole page to see the changes and implement the reconcillitaion
        else{
          setclickedButton("False")
    } */}

      {/* I suspect that the problem lies in the fact that you are calling your state setter immediately 
  inside the function component body, which forces React to re-invoke your function again, with the same props, 
  which ends up calling the state setter again, which triggers React to call your function again.... and so on. */}
      {/* <h1>{clickedButton}</h1>   */}
      {/* React recocilliation and virtual dom concept is behind this  ONLY A relevent portion of dom is getting updated diff algo in action*/}
      {/* it will be very non performent and lengthy if we implement that functionality in simple js using inner html and .value etc */}
      {/* that is kown as double binding reading and writing simentnously react hooks are built in functions*/}

      {/* <Comp props={Filteredrestaurants.length}/> */}

      {console.log(Filteredrestaurants)}

      {Allrestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="myrest">
          {
            //  {a=10?(console.log("ll")):(bch)}
            // {((a=10),console.log(a))}
            Filteredrestaurants.map((restaurant) => {
              //  React and react fibre are the core of react it is written in react core libraray which is used for react native also but code for DOM MAIPULATION
              // FROM THIS IS WRITTEN IN REACT DOM
              // console.log(...[restaurant.data.data.name])

              // let prop={...[restaurant.data.data]}
              // console.log({...prop})
              // PROPS
              //         What are React Props?
              // Props in React are inputs that you pass into components. The props enable the component to access customised data,
              // values, and pieces of information that the inputs hold.

              // The term 'props' is an abbreviation for 'properties' which refers to the properties of an object.
              return (
                <>
                  <Link
                    to={"/resturent/" + restaurant?.info?.id}
                    className="link2" //link to attribute mera on click pe event fire karega or activate hoga like html ki tarah or route karega
                    key={restaurant?.info?.id}
                  >
                    <Resturentcard
                      hotel={restaurant}
                      key={restaurant?.info?.id}
                    />
                  </Link>
                  {/* <Resturentcard hotel={restaurant} key={restaurant.data.data.id}/> */}
                </>
              );
            })
          }
        </div>
      )}
    </>
  );
};
export default Body;
