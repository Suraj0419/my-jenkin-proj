import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import config from '../config.js';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${config.apiUrl}/users`, {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {data.map((x) => {
          return <li>{x.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
