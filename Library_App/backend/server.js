const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "book_management"
})

app.listen(8081, ()=>{
    console.log("listening");
})

app.get('/',(re,res)=>{
    return res.json("From backend");
})

app.get('/authors',(re,res)=>{
    const sql = "SELECT * FROM authors";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
