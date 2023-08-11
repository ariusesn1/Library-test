import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateBooks() {
  let navigate = useNavigate();

  const [books, setBooks] = useState({
    title: "",
    category_id: "",
    author_id: "",
    price: ""
  });

  const [category, setCategory] = useState([]);
  const [authors, setAuthors] = useState([]);

  const { title, category_id, author_id, price } = books;

  useEffect(() => {
    loadAuthors();
    loadCategory();
  }, []);

  const loadAuthors = async () => {
      const result = await axios.get("http://localhost:8081/authors");
      setAuthors(result.data);
  };

  const loadCategory = async () => {
      const result = await axios.get("http://localhost:8081/category");
      setCategory(result.data);
  };

  const onInputChange = (e) => {
    setBooks({ ...books, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/books/create", books);
    navigate("/books");
  };

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
          <h2 className='text-center m-4'>CREATE NEW BOOK</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter title'
                name='title'
                value={title}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
              <select
                className='form-select'
                name='category_id'
                value={category_id}
                onChange={(e) => onInputChange(e)}
                required
              >
                <option value=''>--Select a category--</option>
                {category.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className='mb-3'>
              <select
                className='form-select'
                name='author_id'
                value={author_id}
                onChange={(e) => onInputChange(e)}
                required
              >
                <option value=''>--Select an author--</option>
                {authors.map(auth => (
                  <option key={auth.id} value={auth.id}>{auth.name}</option>
                ))}
              </select>
            </div>
            <div className='mb-3'>
              <input
                type='number'
                className='form-control'
                placeholder='Enter price'
                name='price'
                value={price}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link to='/books' className='btn btn-outline-danger mx-2'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
