
import './App.css';



function App() {
  let list=["Mum","del","kol","Che"];
  return (
    <div className="App">
      <div className="row">
       <div className="d-none d-md-block col-md-3">COL1</div>
       <div className="col-12 col-md-6">
       {list.map((item,index)=>
        <div className="d-flex justify-content-center align-items-center text-light  bg-info mb-2" style={{height:"150px",fontSize:"2rem"}}>
        {item} </div>
       )}
       
       </div>
       <div className="d-none d-md-block col-md-3">COL1</div>
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