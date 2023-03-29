import './Personajes.css'
import personaje1 from '../../IMG/IAN.png';
import personaje2 from '../../IMG/CAMPBELL.png';
import personaje3 from '../../IMG/OVEJA.png';

function Personajes(){
    return(
        <section className='Slider container'>
            <div className=" title text-light">
                <h1>Personajes</h1>
            </div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner slideritem">
    <div className="carousel-item  active">
        <div className="d-flex justify-content-center">
      <img src={personaje1} className="personaje" alt="Ian Wilmut"/>
        </div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Ian Wilmut</h5>
        <p>Embriologista</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center">
      <img src={personaje2} className="personaje" alt="Keith Campbell"/>
        </div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Keith Campbell</h5>
        <p>Biólogo</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center">
      <img src={personaje3} className="personaje" alt="Oveja Dolly"/>
        </div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Dolly</h5>
        <p>Primer mamífero clonado de la historia</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
    )
}

export default Personajes