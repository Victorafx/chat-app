import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
        avatar="https://randomuser.me/api/portraits/women/75.jpg"
        name="Patsy Montgomery"
        online
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/22.jpg"
        name="Raymond Douglas"
        offline
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/63.jpg"
        name="Travis Montgomery"
        online
      />
    </div>
  );
}

export default App;
