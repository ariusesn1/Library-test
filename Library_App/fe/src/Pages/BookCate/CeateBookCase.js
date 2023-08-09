import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

export default function CeateBookCase() {
    let navigate = useNavigate();

  const [book, setBooks] = useState({
    name:""
  });

  const{name} = book;

  const onInputChange =(e) => {
    setBooks({...book, [e.target.name]: e.target.value});
  };

  const onSubmit= async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/book/create", book)
    navigate("/books");
  };
  return (
    <div className="container py-5">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
        <h2 className="text-center m-4">CREATE BOOKCASE</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label"></label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link to="/books" className="btn btn-outline-danger mx-2">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  </div>
);
}
