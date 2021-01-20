import "./App.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

function App() {
  let count=100;
  let [counter, setCounter]=useState(200);
  const[title,setTitle]=useState("My Project");
  const[isActive,setActive]=useState(true);
  const[list, setList]=useState(["Hello World"]); //list is immutable
  // const likeMethod=()=>{
  //   setCounter(counter+1); 
  // }
  // const dislikeMethod=()=>{
  //   setCounter(counter-1); 
  // }
  const addElement=()=>{
    console.log("call is here");
        setList(["Hello Universe",...list]);
  };
  return( 
   <div>
      <div>{title}</div>
      <div>Array List</div>
      <button  onClick={addElement}>Add Element</button> 
      <div>{list.length}</div>
     {list.map((item, index)=>{
       <div key={index}><h4></h4></div>
     })}  
    </div>
  );
}

export default App;


/*
##Notes
1.Use of imgaes
2.Resposive
  --col-       Extra smal
  --col-sm-    small
  --col-md-    computer
  --col-lg-    large
  --col-xl-    extra large
    d-none    --hide col
    d-block    --display col
*/


/*
*States 
*/