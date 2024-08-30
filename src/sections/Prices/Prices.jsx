import React from 'react';

const Prices = ({ total, totalPrice }) => {
  return (
    <div>
      <h2>Paquete</h2>
      {Object.keys(total).map((key) => (
        <div key={key}>
          <h4>{key.toUpperCase()}</h4>
          <p>{total[key]?.nombre || total[key]?.titulo}:{total[key]?.precio || total[key]?.costo}</p>
        </div>
      ))}
      <h3>Total del Paquete: ${totalPrice}</h3>
    </div>
  );
};

export default Prices;
