import logomarca from '../../IMG/BITATELOGO.png'

function Descripcion() {
  return (
    <section className="Marcamatriz container">
      <div className="contenido">
        <div>
          <h1>BITATE</h1>
        </div>
        <div className="textos">
        <div className="imgbitate">
            <img className="w-50 logobitate" src={logomarca} alt="" />
          </div>
          <div className="parrafo">
            <div className="descripcion">
              <p>
                BITATE es la marca matriz en donde se albergan varios cómics
                interactivos sobre diferentes hechos historicos que tienen
                espacio en diferentes partes del mundo. Cada uno de los
                proyectos que aquí se albergan son producidos por, en su
                momento, estudiantes de producción de multimedia. BITATE, es la
                abreviación de Bitacoras Terrestres. Haciendo alusión al diario
                de una persona cualquiera en donde se describen hechos e
                información importante
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Descripcion;
