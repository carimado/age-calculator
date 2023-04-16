import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
      day: '', 
      month: '', 
      year: ''
    });

    // create a function to calculate the age
    // import current date and subtract the date of birth

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formDataNumbers = Object.keys(formData).map(key => {
      return formData[key] = parseInt(formData[key]);
    }, {});
    console.log(formDataNumbers);
  }

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div className="calculator-container">
        <form className="calculator-form" onSubmit={handleSubmit}>
          <label htmlFor="Day">Day</label>
          <input type="number" name="day" onChange={handleInputChange}></input>
          <label htmlFor="Day">Month</label>
          <input type="number" name="month" onChange={handleInputChange}></input>
          <label htmlFor="Day">Year</label>
          <input type="number" name="year" onChange={handleInputChange}></input>
          <button type="submit">Calculate Age</button>
        </form>
      </div>
      <div className="results-container">
        <h2>Results</h2>
      </div>
    </div>
  );
}

export default App;
