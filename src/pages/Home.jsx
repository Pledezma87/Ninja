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
        // Manejar el error aquí si es necesario
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Usuarios</h1>
      <ul className="list-group">
        {users.map((user, id) => (
          <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{user.name.first} {user.name.last}</h5>
              <p className="mb-0">{user.email}</p>
            </div>
            <Link to={`/detalle/${id}`} className="btn btn-primary btn-sm">Ver Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
