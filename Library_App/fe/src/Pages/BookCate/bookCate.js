import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function BookCate() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBookcase()
  },[])

  const loadBookcase = async () => {
    const result = await axios.get("http://localhost:8081/books");
    setBooks(result.data);
  };

  const deleteBookcase = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/books/delete/ ${id}`);
    }catch (error) {
      console.error('Error deleting bookcase', error);
    }
  };  

  return (
    <div className='container'>
    <div className='row'>
      <div className='py-4'>
        <Link className='btn btn-primary mb-3' to="/bookcase/create">CREATE BOOKCASE</Link>
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">#</th>
                <th scope="col">Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((data, i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{data.name}</td>
                <td>
                  <Link to={`/book/update/${data.id }`} className='btn btn-outline-primary mx-2'>Update</Link>
                  <button className='btn btn-outline-danger'onClick={() => deleteBookcase(data.id)}>Delete</button>
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
