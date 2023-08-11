import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Author() {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
       loadAuthors()
    }, [])

    const loadAuthors= async ()=>{
      const result =await axios.get("http://localhost:8081/authors");
      setAuthors(result.data);
    }; 

    const deleteAuthor = async (id) => {
      try {
        await axios.delete(`http://localhost:8081/author/delete/${id}`);
        loadAuthors(); // Reload authors after successful delete
      } catch (error) {
        console.error('Error deleting author:', error);
      }
    };

  return (
    <div className='container'>
      <div className='row'>
        <div className='py-4'>
          <Link className='btn btn-success mb-3' to="/author/create">CREATE NEW AUTHOR</Link>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">ID</th>
                  <th scope="col">Name</th>
                <th scope="col">Nationality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((data, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{data.name}</td>
                  <td>{data.nationality}</td>
                  <td>
                    <Link to={`/author/update/${data.id }`} className='btn btn-outline-primary mx-2'>Update</Link>
                    <button className='btn btn-outline-danger'onClick={() => deleteAuthor(data.id)}>Delete</button>
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
