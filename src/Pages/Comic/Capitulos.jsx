import "./Capitulos.css";
import { Link } from "react-router-dom";
import comicpromo from "../../IMG/promocomic.png"

function Capitulos() {
  return (
    <section className="container">
      <div className=" title text-light">
                <h1>Cómic</h1>
            </div>
            <div className="cards">
        <div className="card cards cardcap bg-dark w-50">
          <div className="p-5">
          <img src={comicpromo} className="card-img-bottom" alt="..." />
            <p className="card-text cards text-center p-3">
            <button type="button" className="btn ver"><Link className='text-light text-decoration-none'>Ver</Link></button>
            </p>
            </div>
        </div>
        </div>
      
    </section>
  );
}

export default Capitulos;

/* <section className='container'>
            <div className=" title text-light">
                <h1>Capitulos</h1>
            </div>
            <div className="cards">
            <div className="card cardcap">
              <img src={Capitulo1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">¿Una idea imposible?</h5>
                <p className="card-text">Algunas ideas que parecen imposibles al final resultan no serlo.
                Ian le cuenta a sus nietos como empezo esta aventura con Dolly.</p>
                <button type="button" className="btn ver"><Link className='text-light text-decoration-none'>Ver</Link></button>
              </div>
            </div>
            <div className="card cardcap">
              <img src={Capitulo2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Buscando ayuda</h5>
                <p className="card-text">El apoyo de expertos siempre es de gran ayuda para nuestros proyectos.
                Ian pide ayuda a Cmpbell.</p>
                <button type="button" className="btn ver"><Link className='text-light text-decoration-none'>Ver</Link></button>
              </div>
            </div>
            <div className="card cardcap">
              <img src={Capitulo3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Intento 277</h5>
                <p className="card-text">Cuando estamos por rendirnos y creemos que ya no hay oportunidad. Un rayo de esperanza brilla en el horizonte.
                Ese rayo es Dolly.</p>
                <button type="button" className="btn ver"><Link className='text-light text-decoration-none'>Ver</Link></button>
              </div>
            </div>
            </div>
        </section> */
