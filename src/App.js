import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'http://localhost:8080/api/employees',
      );
      
       setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
     <h1>EMS</h1>
     <ul>
       {data.map(item=> (
         <li key={item.id}>
          <p>{item.name}</p>
        </li>
       ))}
     </ul>
    </div>
  );
}

export default App;