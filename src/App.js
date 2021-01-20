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

  //Immutable Object
  const[post,setPost]=useState({
    message:"I am Facebook post",
    likecount:0,
    dislikecount:0,
    comment:[],
  })

  
   const addComment=()=>{
     // setComment(["Hello Universe",...comment]);
     setPost({...post,comment:[singlecomment,...post.comment]});
      setSingleComment("");
   };
  return(
    <div>
    <h1>{title}</h1>
    <h3>{post.message}</h3>
    <input type="text" name=""  onChange={updateTheSingleComm} value={singlecomment} placeholder="Comment.."/>
    <button onClick={addComment}>Add Comment</button>
    <div>Comments {post.comment.length}</div>
    {post.map((item,index)=>(
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