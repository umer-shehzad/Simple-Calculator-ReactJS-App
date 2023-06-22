import React from 'react';
import './App.css';
import CalculatorForm from './components/CalculatorForm';

function App() {
  
  return (
    <div className='container'>
      <div className='heading'>
        <h1>Simple Calculator App</h1>
      </div>
      <CalculatorForm />
    </div>
  );
}

export default App;
