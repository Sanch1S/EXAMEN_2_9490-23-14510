function ComandaDetalle({ items, totalVisualRef, onCobrarOrden }) {
  // FALLO PROPS A (Anti-patrón "Prop to Local State"):
  // Se copia la prop al estado local durante el montaje inicial.
  // Cuando el padre actualiza 'items', este componente no sincroniza y muestra siempre lista vacía.
  const [itemsLocales, setItemsLocales] = useState(items);

  // FALLO PROPS B (Mutación directa de Props):
  // Se altera la propiedad de un objeto que pertenece al estado del componente padre.
  const aplicarCortesia = (index) => {
    items[index].precio = 0; // Violación de inmutabilidad y flujo unidireccional
    alert(`Cortesía aplicada al producto: ${items[index].nombre}`);
  };

  return (
    <section style={{ margin: '20px 0', border: '1px dashed gray', padding: '16px' }}>
      <h3>Comanda en Proceso</h3>
      <ul>
        {itemsLocales.length === 0 ? (
          <li>No hay productos agregados</li>
        ) : (
          itemsLocales.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '6px' }}>
              {item.nombre} — Q{item.precio}
              <button onClick={() => aplicarCortesia(idx)} style={{ marginLeft: '10px' }}>
                Marcar Cortesía
              </button>
            </li>
          ))
        )}
      </ul>

      {/* FALLO 3 (useRef para UI): La pantalla no reacciona a cambios en .current */}
      <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>
        <strong>Total a Cobrar: Q{totalVisualRef.current}</strong>
      </div>

      {/* FALLO PROPS C (Contrato de Props roto): 
          El componente intenta invocar una prop que no existe bajo ese nombre */}
      <button
        onClick={() => onCobrar()} 
        style={{ marginTop: '12px', padding: '10px 16px', background: 'green', color: 'white' }}
      >
        Cobrar y Enviar a Cocina
      </button>
    </section>
  );
}