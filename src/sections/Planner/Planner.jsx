import React, { useState } from 'react';
import { planDeViajes } from '../../data/data.js';
import Card from '../../components/Card/Card.jsx';
import Prices from '../Prices/Prices.jsx';

const Planner = () => {
  const [total, setTotal] = useState({
    alimentacion: null,
    hoteles: null,
    destinos: null
  });

  const selectOption = (type, option) => {
    setTotal({ ...total, [type]: option });
  };

  const calcularPrecio = () => {
    return [
      total.alimentacion?.precio,
      total.hoteles?.costo,
      total.destinos?.precio
    ].filter(price => price !== undefined).reduce((totalPrice, price) => totalPrice + price, 0);
  };

  return (
    <div>
      <div>
        <h1>Selecciona tu Paquete de Viaje</h1>
        <h2>Destinos</h2>
        <div>
          {Object.keys(planDeViajes.destinosdla).map((key) => (
            <Card
              key={key}
              option={planDeViajes.destinosdla[key]}
              type="destinos"
              isSelected={total.destinos?.nombre === planDeViajes.destinosdla[key].nombre}
              onSelect={selectOption}
            />
          ))}
        </div>
        <h2>Alimentación</h2>
        <div>
          {planDeViajes.alimentacion.map((option, index) => (
            <Card
              key={index}
              option={option}
              type="alimentacion"
              isSelected={total.alimentacion?.titulo === option.titulo}
              onSelect={selectOption}
            />
          ))}
        </div>
        <h2>Hoteles</h2>
        <div>
          {planDeViajes.hoteles.map((option, index) => (
            <Card
              key={index}
              option={option}
              type="hoteles"
              isSelected={total.hoteles?.nombre === option.nombre}
              onSelect={selectOption}
            />
          ))}
        </div>
      </div>
      <div>
        <Prices total={total} totalPrice={calcularPrecio()} />
      </div>
    </div>
  );
};

export default Planner;
