import './App.css';
import React from 'react';
import { useState } from 'react';
import { differenceInDays } from 'date-fns';

function App() {
  const [formData, setFormData] = useState({
      day: '', 
      month: '', 
      year: ''
    });
  const [results, setResults] = useState();

  const calculateAge = (event) => {
    event.preventDefault();
    const today = new Date();
    console.log(today);
    const birthDate = new Date(formData.year, formData.month - 1, formData.day);
    console.log(birthDate);

    const age = differenceInDays(today, birthDate);
    console.log(age);

    const years = Math.floor(age / 365);
    const months = Math.floor((age % 365) / 30);
    const days = Math.floor((age % 365) % 30);

    setResults({
      years: years,
      months: months,
      days: days
    });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div className="calculator-container">
        <form className="calculator-form" onSubmit={calculateAge}>
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
        <p>{results && results.years} years</p>
        <p>{results && results.months} months</p>
        <p>{results && results.days} days</p>

      </div>
    </div>
  );
}

export default App;
