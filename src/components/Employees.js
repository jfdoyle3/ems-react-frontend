import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Employees() {
  const [data, setData] = useState([]);
  const GET_EMPLOYEES_URL='http://localhost:8080/api/employees';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        GET_EMPLOYEES_URL,
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

export default Employees;


