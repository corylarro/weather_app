import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Let's Check The Weather</h1>
          <h4>Enter A City Below</h4>
        </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Cory Larro
      </footer>
    </div>
  );
}
export default App;
