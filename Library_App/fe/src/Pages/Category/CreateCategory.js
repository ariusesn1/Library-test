import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

export default function CreateCategory() {
  let navigate = useNavigate();

  const [category, setCategory] = useState({
    name:""
  });

  const{name} = category;

  const onInputChange =(e) => {
    setCategory({...category, [e.target.name]: e.target.value});
  };

  const onSubmit= async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/category/create", category)
    navigate("/category")
  };

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
          <h2 className='text-center m-4'>CREATE NEW CATEGORY</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'></label>
              <input 
                type={"text"} 
                className='form-control' 
                placeholder='Enter name' 
                name='name'
                value={name} 
                onChange={(e) => onInputChange(e)} 
                required
              />
            </div>
            
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link to='/category' className='btn btn-outline-danger mx-2'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
