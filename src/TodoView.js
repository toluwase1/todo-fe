import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TodoView() {
  const [todo, setTodo] = useState({});
  const { id } = useParams();
    console.log(id)
  useEffect(() => {
    // axios.get(`localhost:8080/api/v1/todos/${id}`)
    axios.get(`http://localhost:8080/api/v1/todos/${id}`)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h2>Todo Details</h2>
        <div className='mb-3'>
          <strong>Title:</strong> {todo.title}
        </div>
        <div className='mb-3'>
          <strong>Description:</strong> {todo.description}
        </div>
        <div className='mb-3'>
          <strong>Category:</strong> {todo.category}
        </div>
        <div className='mb-3'>
          <strong>Status:</strong> {todo.status}
        </div>
        <button className='btn btn-primary' onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
}

export default TodoView;
