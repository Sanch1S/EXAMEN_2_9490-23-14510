import { useEffect, useState } from 'react';

const DURACION_PROMO = 30;

export default function TemporizadorPromo({ activo }) {
  const [segundos, setSegundos] = useState(DURACION_PROMO);
  const terminado = segundos === 0;

  useEffect(() => {
    if (!activo || terminado) return;

    const timer = setInterval(() => {
      setSegundos((actual) => Math.max(actual - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [activo, terminado]);

  return (
    <div style={{ color: 'crimson', fontWeight: 'bold' }}>
      {terminado
        ? 'La promoción Combo Descuento ha finalizado'
        : `Tiempo para aplicar Combo Descuento: ${segundos}s`}
    </div>
  );
}
