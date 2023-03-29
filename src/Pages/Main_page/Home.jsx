
import './Home.css';
import personaje1 from '../../IMG/IAN.png';
import personaje2 from '../../IMG/CAMPBELL.png';
import personaje3 from '../../IMG/OVEJA.png';
import fondoblanco from '../../IMG/FONDOHOME.png';
import burbujas from '../../IMG/burbujas.png';
import { Link } from "react-router-dom";




function Home() {
  return (
        <section className='mt-5'>
            <div className="todo">
            <div className="fondo">
                <img className='burbujas' src={burbujas} alt="" />
            </div>
            <div className='slider'>
                <div className="carousel slide imagenes  " data-bs-ride="carousel">
                    <div className="carousel-inner sliderof">
                    <div className="carousel-item active">
                        <img src={personaje1} className=" d-block ian" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={personaje2} className="d-block ian" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={personaje3} className="d-block ian" alt="..."/>
                    </div>
                    </div>
                </div>
                </div>
                
            
            <div className="derecho">
                <div className="contenidohome">
                <div className="textohome">
                <h1 className='fw-bolder'>Erudiclon</h1>
                <p>Somos un proyecto formativo que busca enseñar de manera dinámica y diferente un tema científico como lo es la clonación de la Oveja Dolly. ¿Cómo lo lograremos? Mediante un cómic digital interactivo el cual se desarrolla a partir de una línea gráfica poco convencional, el pixelart. Lo cual le da un toque más divertido al tema. ¡Sé parte de esta aventura!
                <div className="botonhome">
                    <button type="button" className="btn visitarhome"> <Link className='text-light text-decoration-none' to='/comic'>Visitar Sitio</Link> </button>
                </div>
                </p>
                
                </div>
                
                <div>
                    <img className='img-fluid fondoblanco' src={fondoblanco} alt="" />
                    
                </div>
                </div>
            </div>
            </div>
        </section>
  )
}

export default Home