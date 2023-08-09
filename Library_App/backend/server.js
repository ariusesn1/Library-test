const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "book_management"
})

app.listen(8081, ()=>{
    console.log("listening");
})

app.get('/',(req,res)=>{
    return res.json("Hello from backend");
})

app.get("/authors", (req, res) => {
    const sql = "SELECT * FROM authors";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post("/author/create", (req, res) => {
    const sql = "insert into authors(name, nationality) values(?)";
    const values = [...Object.values(req.body)];
    console.log("insert", values);
    db.query(sql, [values], (err, data) => {
      console.log(err, data);
      if (err) return res.json({ error: err.message });
      else return res.json({ data });
    });
});

app.delete("/author/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM authors WHERE id = ?";
    
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        } else {
            return res.json({ message: "Author deleted successfully" });
        }
    });
});

app.get("/author/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM authors WHERE id = ?";
    
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        } else {
            if (data.length === 0) {
                return res.json({ message: "Author not found" });
            }
            return res.json(data[0]); // Trả về tác giả đầu tiên trong danh sách
        }
    });
});

app.put("/author/update/:id", (req, res) => {
    const id = req.params.id;
    console.log("updated " + req.body);
    const data = req.body;
    const q =
      "update authors set " +
      Object.keys(data)
        .map((k) => `${k} = ?`)
        .join(",") +
      " where id='" +
      id +
      "'";
    console.log(q);
    db.query(q, [...Object.values(data)], (err, out) => {
      console.log(err, out);
      if (err) return res.json({ error: err.message });
      else {
        return res.json({ data: out });
      }
    });
  });   

