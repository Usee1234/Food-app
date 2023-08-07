// Like our functional componenet is simple js functions written in react
// siMILARLY OUR class componenet is simple ja classses written in react
// how to write class baaesd componenets
// why we use extend to inherit some properties from react as to told react that it is react class not a normal js class
import React from "react";
import { Component } from "react";
// now there is imortant method come which is called render method which basically renders jsx simillarly like how functional componenents return jsx
class Profile extends React.Component{ 
    //super power through which react know tha yes its a class based componenets to return it in render method
    //  HOW WE DEFINE STATE VARIABLE IN CLASS BASED COMPONENET
    // u create state variables inside construters as they are the by deafualt  called for the first time wheever the class is intilized for the first time even before the intiaal render so that 
    //  react can easily track the change in state variables and that state change is or modified obj is written in render method as it is called second
    // secondly super is defined inside it to inherite all the methods of parent classs which is react.componenet
    // class Profile extends Component{ this is also a way of writing componenets
        constructor(props){// constrututer take in props react will take care of props 
            //reaserach hw why do we need super props  u have to get ur props inside construter(props)
            //whenever u creating a constructer u have to create this super(props) thing 
            //why contsrut whenever a class componenet or new instance of a class is created or class is invoked wheever the clas comp is rendered
            // a constr is callled and this the place where  u define state for class based componenet if u dont decale super react will compalin
            super(props);
            console.log(this.props)
            this.state={
                userInfo:{
                    name:"dummy-name",
                    location:"dummy-location",
                    avatar_url:"dummy-avatar"
                }
                // count:0,
                // count2:9,
               // another state variable in react 
                //how do we do setCount in classs based componenet
             
                //react life cycle methods  in every react life cycle method in class 1st constructer is called then render func is called
                
            }
            console.log("Child-construter"+this.props.name)
            
        }
    // whole state is a one big object for react
    //componenetdidmount in classes
//setstate can be done in componenet did mount as well as insiide render also according to need 
   async componentDidMount(){
        // this.timer=setInterval(()=>{
        //   console.log("React sikho")
        // },1000)
        console.log("every thing inside this will be called after intial render in class based compomnenets/child componenet Did mount"+this.props.name)
        //when a class based componenets is called there is some react life cycle methods is called which tells us about life cycle of a react componenet 
        // which will come first like 1st construter then intial render or render method is called and componenet renders then componentdid mount etc
        // so what is the best place to make a API Call  exactly inside componenet did mount after intial render there are more lifecycle mehods we will study 
        //most imp ones only
        // WHY CAN I MAKE MY COMPONENET DID MOUNT ASYNC NUT NOT MY USE EFFFECT HOOK async hw
       const data= await fetch("https://api.github.com/users/usee1234");
       const response=await data.json();
       console.log(response)
       this.setState({
        userInfo:response
       })
    }

// what happens to react life cycle componenets when u put async
//  1st "PARENT CONTSTRUTER() WILL BE CALLED"
// 2nd " parent render()"will be called 
// 3rd "CHILD CONSTRUCTER WILL BE CALLED"
// 4TH "CHILD RendeR WILL BE CALLED "
// upadtes the dom via parent comp didmount
// because in child componenetdidmount there is an async it will take time its an async fun thats why it dealy beacause of api call
// so dom is updated through parent comp did mount upadtes the dom
// json is logged into the console
// parent componenet did mount
// child comp did mount is called but it will chalega afterfetch async opt
// due to state change again child render once again and reconcillation processe triggred once again
//this rerender cycle is known as updating 
//  1st "PARENT CONTSTRUTER() WILL BE CALLED"
// 2nd " parent render()"will be called 
// 3rd "CHILD CONSTRUCTER WILL BE CALLED"
// 4TH "CHILD RendeR WILL BE CALLED 
//upadtes the intial dom via parent comp didmount
//API CALLL ASYNC  OPT child comp did mount is called previously console.logs json
//updates the state via set state/props/force updates as it comes again inside child componenet did mount after that child reneder comes in picture once again
//{
    // again updates the dom
    // and componet did update is called after each rerender called after updating
// } //
// what happens when u update the componenet it will render,it will update the dom,and it will trigger another method Componentdidupdate which will be called after every 
// next render 
componentDidUpdate(prevProps,prevState){
    console.log("updating....") //just like useEEffect if put nothing in place of dependency array it will be called after every rerender
    // if u wants to do the same thing that like use effect invokes after every rerender than u have to to do some thing like this in react update method in class componenets
    // if (
    //     this.state.count!==prevState.count||this.state.count!==prevState.count
    //     ){
        // if (
            //     this.state.count!==prevState.count){
        
            // }
            // if (
                //     this.state.count2!==prevState.count2){
                //   and these if elese conditions used to be too bog also
                // }
        // if (
            //     this.state.count2!==prevState.count2||this.state.count!==prevState.count
            //     ){
    //  //then do this its very painfull to check conditions of state count
    // } thats why it was an array 
    //that set interval that we have done in mount method will create a massive performance issue for the webapp
    // due SPA nature of react which will and can crash the app the solutoun of this is unmount
}
componentWillUnmount()
{
//as soon as our componenet unmounts as we go to some other page through route this will be called 
// what is the use of this willunmount we need to clear things up when we routing from one page to another
//
// clearInterval(this.timer)
console.log("unmounting....")
}
   render(){
    // const{name,location,avatar_url}=this.state.userInfo
    console.log("Child-render"+this.props.name)
       const{count}=this.state //destructuring of object
    return(<h1>
            My First class-based COMPONENET
            {/* this in clssses is like a property which attaches itself to this instance of this profile class this props will point to that profile class object*/}
            {/* yaha pe ap props tu dete hu nahi  as parameter tu uska kam this karega */}
            {/* <h2>{this.props.name}</h2>  */}
            <h2>Name:{this.state.userInfo.name}</h2> 
            {/* this ka matlab us class ki props */}
            <h2>
                {/* {
                    this.props.hobby
                    
                } */}
                loaction:{this.state.userInfo.location}
                <img src={this.state.userInfo.avatar_url}></img>
                {/* count:{count} */}
            </h2>
            {/* <button onClick={()=>{ */}
                {/* // this.state.count=1 u cant set state like this as react ko batana padega na class comp ma bi ki ye state vareaiable ha like set s */}
                {/* // tate function ma hum yahi tu kate the so thst raect will trigger reconcilliaton we do not mutate state directly we wiil never do this.state=something */}
                {/* this.setState({ */}
               {/* //we send a modified object to setstate we can update the whole big state we can update it together  */}
            {/* //    and over here in the newer way we have diffrent func for each and every state variable it will just modify the partial object */}
            {/* // the object which u pass in modified object */}
                {/* //    count:1,
                //    count2:10, */}
                


                {/* }); */}
                 

            {/* }}> */}
            {/* Click by class */}
            {/* </button> */}

    </h1>)
   }
}
export default Profile;
