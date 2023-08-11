const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "book_management"
})

app.listen(8081, ()=>{
    console.log("listening");
})

app.get('/',(req,res)=>{
    return res.json("Hello from backend");
})

//CRUD Author
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
//End of CRUD Author

//CRUD Category
app.get("/category", (req, res) => {
    const sql = "SELECT * FROM categories";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post("/category/create", (req, res) => {
    const sql = "insert into categories(name) values(?)";
    const values = [...Object.values(req.body)];
    console.log("insert", values);
    db.query(sql, [values], (err, data) => {
      console.log(err, data);
      if (err) return res.json({ error: err.message });
      else return res.json({ data });
    });
});

app.delete("/category/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM categories WHERE id = ?";
    
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        } else {
            return res.json({ message: "Category deleted successfully" });
        }
    });
});

app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM categories WHERE id = ?";
    
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        } else {
            if (data.length === 0) {
                return res.json({ message: "Category not found" });
            }
            return res.json(data[0]); 
        }
    });
});

app.put("/category/update/:id", (req, res) => {
    const id = req.params.id;
    console.log("updated " + req.body);
    const data = req.body;
    const q =
      "update book_categories set " +
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
// End of CRUD Category

//CRUD Books
app.get("/books", (req, res) => {
    const sql = "SELECT * FROM books";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.get("/books/sort/:order", (req, res) => {
    const order = req.params.order === "asc" ? "ASC" : "DESC";
    const sql = `SELECT * FROM books ORDER BY price ${order}`;
    
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        } else {
            return res.json(data);
        }
    });
});

app.post("/books/create", (req, res) => {
    const sql = "insert into books(title,category_id,author_id,price) values(?)";
    const values = [...Object.values(req.body)];
    console.log("insert", values);
    db.query(sql, [values], (err, data) => {
      console.log(err, data);
      if (err) return res.json({ error: err.message });
      else return res.json({ data });
    });
});

app.delete("/books/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM books WHERE id = ?";
    
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        } else {
            return res.json({ message: "Books deleted successfully" });
        }
    });
});

app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM books WHERE id = ?";
    
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        } else {
            if (data.length === 0) {
                return res.json({ message: "Book not found" });
            }
            return res.json(data[0]); 
        }
    });
});

app.put("/books/update/:id", (req, res) => {
    const id = req.params.id;
    console.log("updated " + req.body);
    const data = req.body;
    const q =
      "update books set " +
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

  