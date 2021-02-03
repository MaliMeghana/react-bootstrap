const {MongoClient} =require("mongodb");
const DB_URL="mongodb://localhost";
const DB_NAME="Todoapp";
const COL_TODO="todo";

const insert=async (task)=>{
  const client=new MongoClient(DB_URL);
  await client.connect();
  const db=client.db(DB_NAME);
  await db.collection(COL_TODO).insertOne(task);
  await client.close(); 
};

const update=async(query,uobj)=>{
  const client=new MongoClient(DB_URL);
  await client.connect();
  const db=client.db(DB_NAME);
  await db.collection(COL_TODO).updateOne(query,uobj);
  client.close();
};

const read=async()=>{
 const client=new MongoClient(DB_URL);
 await client.connect();
 const db=client.db(DB_NAME);
 const list=await db.collection(COL_TODO).find().toArray();
 client.close();
 return list;
};

module.exports={
    insert:insert,
    update:update,
    read:read
}