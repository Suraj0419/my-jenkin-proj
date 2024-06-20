
import "./App.css";
import { useEffect, useState } from "react";

function App({config}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(config)
     fetch(`${config.apiUrl}/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {data.map((x) => {
          return <li>{x.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
