import './../App.css'
import React, {useState} from 'react';
import axios from 'axios';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


var App1 =function() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:8000/client/List/';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
    navigate('/Display');
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>LendXD File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button className="btn btn-dark" type="submit">Upload</button>
        </form>
    </div>
  );
}





export default App1;