var express = require('express')
var bodyparser = require ('body-parser')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(express.static('.'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://Localhost:27017/mydb'/*,{
    userNewUrLParser:true,
    useUnifiedTopoLogy:true
}*/);
var db = mongoose.connection;

db.on('error',()=>console.log("error in connecting datatbase"));
db.once('open',()=>console.log("connected to database"))

app.post("/signup",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var telno = req.body.telno;
    var message = req.body.message;

    var data={
        "name":name,
        "email":email,
        "telno":telno,
        "message":message
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        //document.getElementById("done").style.display='block';
        console.log("recorded successfully");
    });

    return res.redirect('index.html');
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-origin":"*"
    })
    return res.redirect('enquiry.html');
}).listen(3000);



console.log("Listening on PORT 3000");
