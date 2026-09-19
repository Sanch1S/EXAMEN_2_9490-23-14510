import { useEffect, useReducer, useRef, useState } from 'react';
import TemporizadorPromo from './TemporizadorPromo.jsx';
import ComandaDetalle from './ComandaDetalle.jsx';

const MENU_INICIAL = [
  { id: 'h1', nombre: 'Hamburguesa Doble', precio: 45 },
  { id: 'p1', nombre: 'Papas Supremas', precio: 20 },
  { id: 'b1', nombre: 'Bebida Mediana', precio: 12 },
];

const STORAGE_KEY = 'cierre_caja';

const facturasReducer = (state, action) => {
  switch (action.type) {
    case 'GUARDAR_VENTA':
      return [...state, action.payload];

    case 'REINICIAR_TURNO':
      return [];

    default:
      return state;
  }
};

const cargarFacturas = () => {
  try {
    const guardado = localStorage.getItem(STORAGE_KEY);
    return guardado ? JSON.parse(guardado) : [];
  } catch {
    return [];
  }
};

export default function TerminalPOS() {
  const [pedidoActual, setPedidoActual] = useState([]);
  const [turnoAbierto, setTurnoAbierto] = useState(true);
  const [cierreCaja, dispatch] = useReducer(facturasReducer, [], cargarFacturas);

  const siguienteLinea = useRef(1);

  const total = pedidoActual.reduce((suma, item) => suma + item.precio, 0);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cierreCaja));
  }, [cierreCaja]);

  const handleAgregarProducto = (producto) => {
    const lineaId = siguienteLinea.current++;
    setPedidoActual((prev) => [...prev, { ...producto, lineaId }]);
  };

  const handleCortesia = (lineaId) => {
    setPedidoActual((prev) =>
      prev.map((item) => (item.lineaId === lineaId ? { ...item, precio: 0 } : item))
    );
  };

  const handleCompletarOrden = () => {
    if (pedidoActual.length === 0) return;

    const ultimoId = cierreCaja.length ? cierreCaja[cierreCaja.length - 1].idFactura : 0;

    dispatch({
      type: 'GUARDAR_VENTA',
      payload: {
        idFactura: ultimoId + 1,
        items: pedidoActual,
        total,
        emitidoEl: new Date().toLocaleTimeString(),
      },
    });

    setPedidoActual([]);
  };

  return (
    <div style={{ fontFamily: 'monospace', padding: '24px', maxWidth: '800px' }}>
      <header style={{ borderBottom: '2px solid currentColor', paddingBottom: '12px' }}>
        <h2>Terminal POS: Estación #1</h2>
        <TemporizadorPromo activo={turnoAbierto} />
        <button onClick={() => setTurnoAbierto((abierto) => !abierto)} style={{ marginTop: '8px' }}>
          {turnoAbierto ? 'Pausar turno' : 'Reanudar turno'}
        </button>
      </header>

      <section style={{ marginTop: '16px' }}>
        <h3>Catálogo</h3>
        {MENU_INICIAL.map((item) => (
          <button
            key={item.id}
            onClick={() => handleAgregarProducto(item)}
            style={{ marginRight: '8px', padding: '8px 12px', cursor: 'pointer' }}
          >
            + {item.nombre} (Q{item.precio})
          </button>
        ))}
      </section>

      <ComandaDetalle
        items={pedidoActual}
        total={total}
        onCortesia={handleCortesia}
        onCobrarOrden={handleCompletarOrden}
      />

      <section>
        <h3>Cierre de Turno (Facturas Generadas: {cierreCaja.length})</h3>
        <ul>
          {cierreCaja.map((factura) => (
            <li key={factura.idFactura}>
              Ticket #{factura.idFactura} — Total: Q{factura.total} ({factura.emitidoEl})
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch({ type: 'REINICIAR_TURNO' })}>Reiniciar turno</button>
      </section>
    </div>
  );
}
