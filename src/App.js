import "./App.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

function App() {
  let count=100;
  let [counter, setCounter]=useState(200);
  const handleClick=()=>{
    setCounter(counter+1);
     count +=1;
  }
  return( 
   <div>
      <div>Hello World</div>
      <div>
        {counter}/{count}
      </div>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
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