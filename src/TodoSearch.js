import React, { useState } from 'react';
import axios from 'axios';

function TodoSearch({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    title: '',
    description: '',
    category: '',
    status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/todos/search', {
        params: searchParams,
      });

      // Call the onSearch callback with the search results
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching todos:', error);
    }
  };

  return (
    <div className="mb-4">
      <h3>Todo Search</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-2">
            <input
              type="text"
              name="title"
              value={searchParams.title}
              onChange={handleInputChange}
              placeholder="Search by Title"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-2">
            <input
              type="text"
              name="description"
              value={searchParams.description}
              onChange={handleInputChange}
              placeholder="Search by Description"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-2">
            <select
              name="category"
              value={searchParams.category}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="">Select Category</option>
              <option value="work">Work</option>
              <option value="home">Home</option>
              <option value="personal">Personal</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-2">
            <select
              name="status"
              value={searchParams.status}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In-Progress</option>
            </select>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
}

export default TodoSearch;