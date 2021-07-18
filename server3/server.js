const express = require("express")
const mongodb = require("mongodb")
const cors = require("cors")
const bodyparser = require("body-parser");
const bodyParser = require("body-parser");

const app=express();

app.use(cors());

app.use(bodyparser.json());

app.use(bodyParser.urlencoded({extended:false}));

let abhiIT=mongodb.MongoClient;

app.get("/products",(req,res)=>{
    abhiIT.connect("mongodb+srv://admin:admin@cluster0.xobfh.mongodb.net/rjs-6pm?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db=connection.db("rjs-6pm");
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
    console.log("server ready")
})