const { render } = require('ejs');
const express = require('express');
const app = express();
const mySql= require('mysql')
const authRouter = require('./routes/auth.js')
// middkewares
app.use(express.static('public'))
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}))
app.use(express.json());


// connect to db (mysql)
const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database:'gmcostdb'
});

db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("connected to Mysql");
    }
})
// routes 

app.use(authRouter)

app.listen(3000,()=>{console.log("listening to port 3000");});