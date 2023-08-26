import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/api';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersData = await ApiService.getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Usuarios</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>
                <h5 className="mb-1">{`${user.name.first} ${user.name.last}`}</h5>
              </td>
              <td>{user.email}</td>
              <div>
                <h3> {`${user.location.city}`} </h3>
                </div>
              <td>
                <Link to={`/detalle/${id}`} className="btn btn-primary btn-sm">
                  Ver Detalles
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;


