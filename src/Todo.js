import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TodoSearch from './TodoSearch';

function Todo() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/todos')
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/todos/${id}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchResults = (results) => {
    setTodos(results);
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <TodoSearch onSearch={handleSearchResults} />

        <Link to="/create" className='btn btn-success'>Create Todo +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((data, i) => (
              <tr key={i}>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.category}</td>
                <td>{data.status}</td>
                <td>
                  <Link to={`/update/${data.ID}`} className='btn btn-primary'>UPDATE</Link>

                  <Link to={`/todo/view/${data.ID}`} className='btn btn-success ms-2'>VIEW</Link>
                  <Link to={`/delete/${data.ID}`} className='btn btn-danger ms-2' onClick={() => handleDelete(data.ID)}>DELETE</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todo;
