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
    database:'gmcost'
});

db.connect((error)=>{
    if(error){
        throw error;
    }else{
        console.log("connected to Mysql");
    }
})
// routes 
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/reports', (req,res)=>{
    res.render('reports')
})

app.use(authRouter)

app.listen(4000,()=>{console.log("listening to port 4000")});