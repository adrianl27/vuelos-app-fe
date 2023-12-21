import React, { useState, useEffect } from 'react';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const respuesta = await fetch('http://localhost:3000/usuarios');
        const data = await respuesta.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.codigo}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
