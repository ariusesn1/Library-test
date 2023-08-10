import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Books() {

    const [books,setBooks] = useState([])

    useEffect(() => {
       loadBooks()
    }, [])

    const loadBooks= async ()=>{
        const result =await axios.get("http://localhost:8081/books");
        setBooks(result.data);
    };

    const deleteBook = async (id) => {
        try {
          await axios.delete(`http://localhost:8081/books/delete/${id}`);
          loadBooks(); 
        } catch (error) {
          console.error('Error deleting books:', error);
        }
      };

  return (
    <div className='container'>
      <div className='row'>
        <div className='py-4'>
          <Link className='btn btn-success mb-3' to="/books/create">CREATE NEW BOOK</Link>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Author</th>
                  <th scope="col">Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((data, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{data.title}</td>
                  <td>{data.category_id}</td>
                  <td>{data.author_id}</td>
                  <td>{data.price}</td>
                  <td>
                    <Link to={`/books/update/${data.id }`} className='btn btn-outline-primary mx-2'>Update</Link>
                    <button className='btn btn-outline-danger'onClick={() => deleteBook(data.id)}>Delete</button>
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
