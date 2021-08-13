import './App.css';

import {Chat} from "./components"
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chat />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
