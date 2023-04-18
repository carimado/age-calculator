import './App.css';
import React from 'react';
import { useState } from 'react';
import { differenceInDays } from 'date-fns';
import { isValid } from 'date-fns'

function App() {
  const [formData, setFormData] = useState({
      day: '', 
      month: '', 
      year: ''
    });
  const [results, setResults] = useState();

  const isValidDate = (formData) => {
    const { day, month, year } = formData;
    const date = new Date(year, month - 1, day);
    return isValid(date);
    
  }

  const calculateAge = (e) => {
    e.preventDefault();

    if (!formData.day || !formData.month || !formData.year) {
      alert('Please enter a date');
      return;
    } else if ((formData.day > 31 || formData.day < 1) || (formData.month > 12 || formData.month < 1) || (formData.year > 2023 || formData.year < 1)) {
      alert('Please enter a valid date');
      return;
    } else if (!isValidDate) {
      alert('Please enter a valid date...')
    } else {
      const today = new Date();
      const birthDate = new Date(formData.year, formData.month - 1, formData.day);
      const age = differenceInDays(today, birthDate);
  
      const years = Math.floor(age / 365);
      const months = Math.floor((age % 365) / 30);
      const days = Math.floor((age % 365) % 30);
  
      setResults({
        years: years,
        months: months,
        days: days
      });
    }

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
