import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

export default function CreateBooks() {
  let navigate = useNavigate();

  const [books, setBooks] = useState({
    title:"",
    category_id:"",
    author_id:"",
    price:""
  });

  const{title,category_id,author_id,price} = books;

  const onInputChange =(e) => {
    setBooks({...books, [e.target.name]: e.target.value});
  };

  const onSubmit= async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/books/create", books)
    navigate("/books")
  };

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
          <h2 className='text-center m-4'>CREATE NEW BOOK</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'></label>
              <input 
                type={"text"} 
                className='form-control' 
                placeholder='Enter title' 
                name='title'
                value={title} 
                onChange={(e) => onInputChange(e)} 
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'></label>
              <input 
                type={"number"} 
                className='form-control' 
                placeholder='Enter category' 
                name='category_id'
                value={category_id} 
                onChange={(e) => onInputChange(e)} 
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'></label>
              <input 
                type={"number"} 
                className='form-control' 
                placeholder='Enter author' 
                name='author_id'
                value={author_id} 
                onChange={(e) => onInputChange(e)} 
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'></label>
              <input 
                type={"text"} 
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
