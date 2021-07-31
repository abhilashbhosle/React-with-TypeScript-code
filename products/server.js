const express=require("express");
const cors=require("cors");
const mongodb=require("mongodb");
const bodyparser=require("body-parser");
const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
abhiIT=mongodb.MongoClient;
app.get("/products",(req,res)=>{
    abhiIT.connect("mongodb+srv://admin:admin@cluster0.xobfh.mongodb.net/rjs-6pm?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db=connection.db("rjs-6pm");
            db.collection("product_details").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
})
app.listen(8080,()=>{
    console.log("server-started")
})
