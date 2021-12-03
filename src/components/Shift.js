import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Shift() {
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
    <div className='container'>

      <table>

      <thead>
      <tr>
      <th>Name</th>
      <th>Supervisor</th>
      <th>Role</th>
      </tr>
      </thead>
      <tbody>

    {data.map(item => (
      <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.supervisor}</td>
      <td>{item.role}</td>
      </tr>
    ))}
      </tbody>
      </table>
    </div>
  );
}

export default Shift;