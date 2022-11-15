
// // var express = require("express")
// // var bodyParser = require("body-parser")
// // var mongoose = require("mongoose")

// // const app = express()

// // app.use(bodyParser.json())
// // app.use(express.static('public'))
// // app.use(bodyParser.urlencoded({
// //     extended:true
// // }))

// // mongoose.connect('mongodb://localhost:27017/mydb',{
    
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // });

// // var db = mongoose.connection;

// // db.on('error',()=>console.log("Error in Connecting to Database"));
// // db.once('open',()=>console.log("Connected to Database"));

// // app.post("/sign_up",(req,res)=>{
// //     var name = req.body.name;
// //     var email = req.body.email;
// //     var phno = req.body.phno;
   

// //     console.log(`${email} and password ${password}`)


// //     // var data = {
// //     //     "name": name,
// //     //     "email" : email,
// //     //     "phno": phno,
// //     //     // "password" : password
// //     // }

// //     // db.collection('users').insertMany(data,(err,collection)=>{
// //     //     if(err){
// //     //         throw err;
// //     //     }
// //     //     console.log("Record Inserted Successfully");
// //     // });
// //     // return res.redirect('signup_success.html')

// // })


// // app.get("/sign_up",(req,res)=>{
// //     res.set({
// //         "Allow-access-Allow-Origin": '*'
// //     })
// //     return res.redirect('signup.html');
// // }).listen(3000);

// // console.log("Listening on PORT 3000");







// // var express=require("express");
// // var bodyParser=require("body-parser");

// // const {MongoClient} = require('mongodb');
// // const res = require("express/lib/response");
// // const url = 'mongodb://localhost:27017';
// // const client = new MongoClient(url);

// // async function getData(){
// //     let result = await client.connect();
// //     let db = result.db('mydb');
// //     let collection = db.collection('customers');
// //     console.log(collection.find({}).toArray());
// // }

// // getData();


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydb');
// var db=mongoose.connection;
// // db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//    console.log("connection succeeded");
// })

// var app=express()

// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//    extended: true
// }));

// app.post('/sign_up', function(req,res){
//    var name = req.body.name;
//    var email = req.body.email;
//    var phno = req.body.phno;

//        console.log(`${email} and password ${password}`)
//        res.send("signup_success.html")


//    var data = {
//       "name": 'name',
//       "email":'email',
//       "phno":'phno'
//    }
//    db.collection('details').insertOne(data,function(err, collection){
//    if (err) throw err;
//       console.log("Record inserted Successfully");
//    });
//    return res.redirect('signup_success.html');

// })

// app.get('/',fconsole.log("server listening at port 3000");console.log("server listening at port 3000");console.log("server listening at port 3000");console.log("server listening at port 3000");console.log("server listening at port 3000");unction(req,res){
//    res.set({
//       'Access-control-Allow-Origin': '*'
//    });
//    return res.redirect('signup.html');
// }).listen(3000)

