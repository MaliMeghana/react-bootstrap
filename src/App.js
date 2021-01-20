import "./App.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

function App() {
  return(
       <div>
         <Post/>
      </div>
  );
}
/*
--All form elements have its own states
--And React Also have states.
<input></input>
*/
function Post(){
  const [title]=useState("Working with Form Input Element");
  const[username, setUsername]=useState("");
  const[password, setPassword]=useState("");
  /*When the state of Input Elelemt is updates . 
     At the same time we are updating , 
     the state of react state var, to keep value SYN
  */
 /**
  * Validation 
  * 
  * its require backend ajax call
  */
  const updateUsername=(e)=>setUsername(e.target.value);
  const updatePassword=(e)=>setPassword(e.target.value);
  return(
      <div className="col-md-9 offset-md-3" >
        <h1>{title}</h1>
        <input type="text" name="username" onChange={updateUsername} value={username} placeholder="Username ..."/>
        <br/>
        <br/>
        <input type="password" name="password" onChange={updatePassword} value={password} placeholder="Password ..."/>
        <br/>
        <br/>
        <div>Username :: {username}</div>

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