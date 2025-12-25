import react, { useState } from "react";
import './App.css';

import Card from './Components/Card';
import Table from './Components/Table';
import FetchApi from './Components/FetchApi';
import Timer from "./Components/Timer";
import Todo from "./Components/Todo";
import UeTodo from "./Components/UeTodo";
import TimeSS from "./Components/TimerSS";
import Form from "./Components/Form";
import Homepage from "./Components/Homepage";
import Localstorage from "./Components/Localstorage";


function App() {
  // const [state, setState] = useState(false);

  return (
    <div className="App">

      {/* {state ? <Card /> : <Table />}

      <button onClick={() => setState(true)}>Show Card</button>
      <button onClick={() => setState(false)}>Show Table</button> */}


      {/* <FetchApi /> */}
      {/* <Timer /> */}
      {/* <Todo /> */}
      {/* <UeTodo /> */}
      {/* <TimeSS />   */}
      {/* <Form /> */}
      {/* <Homepage /> */}
      <Localstorage />
    </div>
  );
}

export default App;
