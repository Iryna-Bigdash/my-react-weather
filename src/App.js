import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {

  return (
    <div className="App">
      <div className='container'>

      <Weather defaultCity="New York" />
      <footer>
        <p>This project is creaded by <a href="https://iryna-bigdash.github.io/my-react-weather/" target="blank">Iryna Bigdash</a>
      </p>
      </footer>

    </div>
    </div>
  );

}

