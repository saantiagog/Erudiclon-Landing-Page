
import './MarcaMatriz.css'
import logomarca from '../../IMG/BITATELOGO.png'
import { Link } from 'react-router-dom'





function MarcaMatriz() {
 
  return (
        <section className="Marcamatriz container">
            <div className="contenido">
                <div>
                    <h1>BITATE</h1>
                </div>
                <div className="textos">
                    <div className="parrafo">
                        <div className="descripcion">

                        <p>BITATE es la marca matriz que representa a todos los proyectos formativos de la ficha 2395752 de producción de multimedia. Allí se albergan diferentes cómics interactivos que cuentan variedad de hechos historicos mediante recursos gráficos interesantes. Aprender mientras te diviertes es el objtivo. ¡Échale un vistazo!</p>
                        </div>
                        <div className="boton">
                        <button type="button" class="btn visitar text-light"><Link className='text-light text-decoration-none' to='/MarcaMatriz'>Visitar Sitio</Link></button>
                        </div>
                    </div>
                    <div className='imgbitate'>
                        <img className='w-50 logobitate' src={logomarca} alt="" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MarcaMatriz