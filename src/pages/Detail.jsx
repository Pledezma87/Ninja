import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../services/api';

function Detail() {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const usersData = await ApiService.getUsers();
        const selectedUser = usersData[id];
        setUserDetails(selectedUser);
      } catch (error) {
        // Manejar el error aquí si es necesario
      }
    }

    fetchUserDetails();
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Detalles del Usuario</h1>
      {userDetails ? (
        <div className="card mb-3">
          <img src={userDetails.picture.large} alt="Foto de usuario" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{userDetails.name.title} {userDetails.name.first} {userDetails.name.last}</h5>
            <p className="card-text">Género: {userDetails.gender}</p>
            <p className="card-text">Email: {userDetails.email}</p>
            <p className="card-text">Fecha de Nacimiento: {userDetails.dob.date}</p>
            <p className="card-text">Edad: {userDetails.dob.age} años</p>
            <p className="card-text">Teléfono: {userDetails.phone}</p>
            <p className="card-text">Celular: {userDetails.cell}</p>
            <p className="card-text">ID: {userDetails.id.value}</p>
            <p className="card-text">Ubicación: {userDetails.location.street.number} {userDetails.location.street.name}, {userDetails.location.city}, {userDetails.location.country}</p>
            <p className="card-text">Estado: {userDetails.location.state}</p>
            <p className="card-text">Código Postal: {userDetails.location.postcode}</p>
            <p className="card-text">Coordenadas: Latitud {userDetails.location.coordinates.latitude}, Longitud {userDetails.location.coordinates.longitude}</p>
            <p className="card-text">Zona Horaria: {userDetails.location.timezone.description}</p>
            <p className="card-text">Registro: {userDetails.registered.date}</p>
            <p className="card-text">Nacionalidad: {userDetails.nat}</p>
          </div>
        </div>
      ) : (
        <p>Cargando detalles del usuario...</p>
      )}
    </div>
  );
}

export default Detail;
