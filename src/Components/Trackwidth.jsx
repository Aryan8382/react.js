import './App.css';
import React, { useState } from "react";

import Bgcolorchnage from './Components/Bgcolorchnage';
import DigiClock from './Components/DigiClock';
import FetchApi from './Components/FetchApi';
import Inputtracker from './Components/Inputtracker';
import Lightdark from './Components/Lightdark';
import TitleUpdat from './Components/TitleUpdat';
import ToggleText from './Components/Toggletext';
import UsestateCounter from './Components/UsestateCounter';
import Trackwidth from './Components/Trackwidth';
import Formautosev from './Components/Formautosev';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Props from './Components/Props';
import Child from './Components/Child';
import Card from './Components/Card';
import Table from './Components/Table';

function App() {
  const [state, setState] = useState(false);

  return (
    <div className="App">

      {/* Your components */}
      {/* <Todo /> */}
      {/* <Props /> */}

      <Card />
      <Table />

      {/* Conditional Rendering */}
      {state ? <Card /> : <Table />}

      {/* Buttons */}
      <button onClick={() => setState(true)}>Show Card</button>
      <button onClick={() => setState(false)}>Show Table</button>

    </div>
  );
}

export default App;
