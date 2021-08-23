const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const mongodb=require("mongodb");

const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
const abhiIT=mongodb.MongoClient;
app.post("/registration",(req,res)=>{
    abhiIT.connect("mongodb+srv://admin:admin@cluster0.xobfh.mongodb.net/authentication?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db=connection.db("authentication");
            db.collection("login_tbl").insertone(req.body,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({Registration:"success"})
                }
            })
        }
    })
    })
app.listen(8080,()=>{
    console.log("server started successfully")
});