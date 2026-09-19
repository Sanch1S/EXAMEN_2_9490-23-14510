export default function ComandaDetalle({ items, total, onCortesia, onCobrarOrden }) {
  const handleCortesia = (item) => {
    onCortesia(item.lineaId);
    alert(`Cortesía aplicada al producto: ${item.nombre}`);
  };

  return (
    <section style={{ margin: '20px 0', border: '1px dashed gray', padding: '16px' }}>
      <h3>Comanda en Proceso</h3>
      <ul>
        {items.length === 0 ? (
          <li>No hay productos agregados</li>
        ) : (
          items.map((item) => (
            <li key={item.lineaId} style={{ marginBottom: '6px' }}>
              {item.nombre} — Q{item.precio}
              <button
                onClick={() => handleCortesia(item)}
                disabled={item.precio === 0}
                style={{ marginLeft: '10px' }}
              >
                Marcar Cortesía
              </button>
            </li>
          ))
        )}
      </ul>

      <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>
        <strong>Total a Cobrar: Q{total}</strong>
      </div>

      <button
        onClick={onCobrarOrden}
        disabled={items.length === 0}
        style={{ marginTop: '12px', padding: '10px 16px', background: 'green', color: 'white' }}
      >
        Cobrar y Enviar a Cocina
      </button>
    </section>
  );
}
