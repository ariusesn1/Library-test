import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
       loadCategory()
    }, [])

    const loadCategory= async ()=>{
      const result =await axios.get("http://localhost:8081/category");
      setCategory(result.data);
    }; 

    const deleteCategory = async (id) => {
      try {
        await axios.delete(`http://localhost:8081/category/delete/${id}`);
        loadCategory(); // Reload category after successful delete
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    };

  return (
    <div className='container'>
      <div className='row'>
        <div className='py-4'>
          <Link className='btn btn-success mb-3' to="/category/create">CREATE NEW CATEGORY</Link>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">ID</th>
                  <th scope="col">Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              {category?.map((data, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td>
                    <Link to={`/category/update/${data.id }`} className='btn btn-outline-primary mx-2'>Update</Link>
                    <button className='btn btn-outline-danger'onClick={() => deleteCategory(data.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
