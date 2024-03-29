import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';

export default function UpdateAuthor() {
  let navigate = useNavigate();

  const {id} = useParams();
  const [author, setAuthors] = useState({
    name:"",
    nationality:""
  });

  const{name, nationality} = author;

  const loadAuthor = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8081/author/${id}`);
      setAuthors(response.data);
    } catch (error) {
      console.error('Error loading author:', error);
    }
  }, [id]);

  useEffect(() => {
    loadAuthor();
  }, [loadAuthor]);

  const onInputChange =(e) => {
    setAuthors({...author, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/author/update/${id}`, author);
      navigate("/authors");
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
          <h2 className='text-center m-4'>UPDATE AUTHOR</h2>
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
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'></label>
              <input 
                type={"text"} 
                className='form-control' 
                placeholder='Enter nationality' 
                name='nationality' 
                value={nationality} 
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            
            <button type='submit' className='btn btn-outline-primary'>Update</button>
            <Link to='/authors' className='btn btn-outline-danger mx-2'>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
