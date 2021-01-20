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

Adding Comments Dyanamically
*/
function Post(){
  const [title]=useState("DYnamic Comment List");
  const updateTheSingleComm=(e)=>setSingleComment(e.target.value);
  const [singlecomment, setSingleComment]=useState([]);
  const [comment, setComment]=useState([]);
   const addComment=()=>{
     // setComment(["Hello Universe",...comment]);
      setComment([singlecomment,...comment]);
      setSingleComment("");
   };
  return(
    <div>
    <h1>{title}</h1>
    <input type="text" name=""  onChange={updateTheSingleComm} value={singlecomment} placeholder="Comment.."/>
    <button onClick={addComment}>Add Comment</button>
    <div>Comments {comment.length}</div>
    {comment.map((item,index)=>(
      <div key={index}>{item}</div>
    ))}
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

/*
LifeCYcle
*/