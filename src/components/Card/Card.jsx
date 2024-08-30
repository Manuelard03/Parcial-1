import React from 'react';

const Card = ({ option, type, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(type, option);
  };

  return (
    <div
      onClick={handleClick}
    >
      <img
        src={option.imagen}
        alt={option.nombre || option.titulo}
      />
      <h3>{option.nombre || option.titulo}</h3>
      <p>Precio: ${option.precio || option.costo}</p>
      {option.estrellas && <p>Calificacion: {option.estrellas}</p>}
      {option.servicios && <p>Servicios: {option.servicios}</p>}
      {option.ubicacion && <p>Ubicación: {option.ubicacion}</p>}
    </div>
  );
};

export default Card;