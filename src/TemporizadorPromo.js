function TemporizadorPromo({ activo }) {
  const [segundos, setSegundos] = useState(30);

  useEffect(() => {
    let timer = null;
    if (activo) {
      timer = setInterval(() => {
        setSegundos(segundos - 1);
      }, 1000);
    }
  }, [activo]);

  return (
    <div style={{ color: 'crimson', fontWeight: 'bold' }}>
      Tiempo para aplicar Combo Descuento: {segundos}s
    </div>
  );
}