import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';

export default function UpdateCategory() {
  let navigate = useNavigate();

  const {id} = useParams();
  const [category, setCategory] = useState({
    name:""
  });

  const{name} = category;

  const loadCategory = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8081/category/${id}`);
      setCategory(response.data);
    } catch (error) {
      console.error('Error loading category:', error);
    }
  }, [id]);

  useEffect(() => {
    loadCategory();
  }, [loadCategory]);

  const onInputChange =(e) => {
    setCategory({...category, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/category/update/${id}`, category);
      navigate("/category");
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
          <h2 className='text-center m-4'>UPDATE CATEGORY</h2>
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
            
            <button type='submit' className='btn btn-outline-primary'>Update</button>
            <Link to='/category' className='btn btn-outline-danger mx-2'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
