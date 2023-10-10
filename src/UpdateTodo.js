import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function UpdateTodo() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8080/api/v1/todos/${id}`, { title, description, category, status })
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err=>console.log(err))
    }

 return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-5'>
        <form onSubmit={handleSubmit}>
          <h2>Update Todo</h2>
          <div className='mb-2'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              placeholder='Enter Your new Todo Title'
              className='form-control'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              id='description'
              placeholder='Enter Your new Todo Description'
              className='form-control'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='category'>Category</label>
            <select
              id='category'
              className='form-control'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=''>Select a category</option>
              <option value='work'>Work</option>
              <option value='home'>Home</option>
              <option value='personal'>Personal</option>
            </select>
          </div>
          <div className='mb-2'>
            <label htmlFor='status'>Status</label>
            <select
              id='status'
              className='form-control'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value=''>Select a status</option>
              <option value='pending'>Pending</option>
              <option value='completed'>Completed</option>
              <option value='in-progress'>In-Progress</option>
            </select>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTodo