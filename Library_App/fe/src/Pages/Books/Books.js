import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [category, setCategory] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    loadBooks();
    loadAuthors();
    loadCategory();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8081/books");
    setBooks(result.data);
    setOriginalBooks(result.data);
  };

  const loadAuthors = async () => {
    const result = await axios.get("http://localhost:8081/authors");
    setAuthors(result.data);
  };

  const loadCategory = async () => {
    const result = await axios.get("http://localhost:8081/category");
    setCategory(result.data);
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/books/delete/${id}`);
      loadBooks();
    } catch (error) {
      console.error("Error deleting books:", error);
    }
  };

  const handleSortChange = async (selectedOrder) => {
    setSortOrder(selectedOrder);

    try {
      const result = await axios.get(
        `http://localhost:8081/books/sort/${selectedOrder}`
      );
      setBooks(result.data);
    } catch (error) {
      console.error("Error sorting books:", error);
    }
  };

  const handleResetSort = () => {
    setBooks(originalBooks);
    setSortOrder("asc");
  };

  const handleSearch = async () => {
      const result = await axios.get(`http://localhost:8081/books?keyword=${searchKeyword}`);
      setBooks(result.data);
  };
  
  

  return (
    <div className="container">
      <div className="row">
        <div className="py-4">
          <Link className="btn btn-success mb-3" to="/books/create">
            CREATE NEW BOOK
          </Link>

          <div className="col-md-4 d-flex justify-content-end">
            <div class="input-group">
              <select
                className="form-select me-2 mb-3"
                value={sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="asc">Sort Price (Asc)</option>
                <option value="desc">Sort Price (Desc)</option>
              </select>
              <div class="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-primary mb-3"
                  onClick={handleResetSort}
                >
                  Reset Sort
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search books by title or author name"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <div class="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <table className="table border">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((data, i) => {
                const categoryObj = category.find(
                  (cat) => cat.id === data.category_id
                );
                const authorObj = authors.find(
                  (auth) => auth.id === data.author_id
                );
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>
                      {categoryObj ? categoryObj.name : "Unknown Category"}
                    </td>
                    <td>{authorObj ? authorObj.name : "Unknown Author"}</td>
                    <td>{data.price}</td>
                    <td>
                      <Link
                        to={`/books/update/${data.id}`}
                        className="btn btn-outline-primary mx-2"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteBook(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
