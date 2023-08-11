import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateBooks() {
  let navigate = useNavigate();

  const { id } = useParams();
  const [books, setBooks] = useState({
    title: "",
    category_id: "",
    author_id: "",
    price: ""
  });

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const { title, category_id, author_id, price } = books;

  const loadBooks = useCallback(async () => {
      const response = await axios.get(`http://localhost:8081/books/${id}`);
      setBooks(response.data);
  }, [id]);

  const loadCategories = async () => {
      const result = await axios.get("http://localhost:8081/category");
      setCategories(result.data);
  };

  const loadAuthors = async () => {
      const result = await axios.get("http://localhost:8081/authors");
      setAuthors(result.data);
  };

  useEffect(() => {
    loadBooks();
    loadCategories();
    loadAuthors();
  }, [loadBooks]);

  const onInputChange = (e) => {
    setBooks({ ...books, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/books/update/${id}`, books);
      navigate("/books");
    } catch (error) {
      console.error('Error updating books:', error);
    }
  };

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
          <h2 className='text-center m-4'>UPDATE BOOK</h2>
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
                {categories.map(cat => (
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
                type='text'
                className='form-control'
                placeholder='Enter price'
                name='price'
                value={price}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Update</button>
            <Link to='/books' className='btn btn-outline-danger mx-2'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
