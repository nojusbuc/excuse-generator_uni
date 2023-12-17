import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Form from './components/form/Form';
import Excuses from './components/excuses/Excuses';
import { mockExcuses } from './mock_data/mockExcuses';

const LOGO_URL = "../public/logos/devlogo.png";

const App = () => {
  return (
    <div className="App">
      <Navbar/>

      <Form/>

      <Excuses excuses={mockExcuses}/>
    </div>
  );
}

export default App;
