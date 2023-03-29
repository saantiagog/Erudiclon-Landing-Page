import ErudiclonLogo from '../../IMG/LogoErudiclon.png';
import IntenaLogo from '../../IMG/LogoIntena.png';
import KyriaLogo from '../../IMG/LogoKyria.png';

function SliderComics (){
    return(
        <section className='Slider container'>
            <div className=" title text-light">
                <h1>Cómics</h1>
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
      <img src={ErudiclonLogo} className="personaje" alt="Ian Wilmut"/>
        </div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Erudiclon</h5>
        <p>Clonación de la Oveja Dolly</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center">
      <img src={IntenaLogo} className="personaje" alt="Keith Campbell"/>
        </div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Intena</h5>
        <p>Batalla de Stalingrado</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center">
      <img src={KyriaLogo} className="personaje" alt="Oveja Dolly"/>
        </div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Kyria</h5>
        <p>Vida y obra de Alejandro Magno</p>
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
export default SliderComics