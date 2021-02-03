const express=require("express");
const cors=require("cors");
const app=express();
const todoQuery=require("./todoquery");

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/read",async(req,res)=>{
  const list=await todoQuery.read();
  res.json(list);
});

app.get("/insert", async (req,res)=>{
  try{
    const{task,complete}=req.query;
    todoQuery.insert({task:task,complete:complete});
    res.json({message:"Operation Success",opr:true});
  }
  catch(err)
  {
    res.json({message:"Server Side Error",opr:false});
  }
});

app.post("/insert",(req,res)=>{
  try{
    const{task,complete}=req.query;
    todoQuery.insert({task:task,complete:complete});
    res.json({message:"Operation Success",opr:true});
  }
  catch(err)
  {
    res.json({message:"Server Side Error",opr:false});
  }
});
//app.listen(4000,()=>console.log("Server started"));