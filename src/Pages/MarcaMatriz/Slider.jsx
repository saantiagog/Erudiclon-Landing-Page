import Erudiclon from '../../IMG/Erudiclon.png';
import Intena from '../../IMG/Intena.png';
import Yachay from '../../IMG/Yachay.png';
import Kyria from '../../IMG/Kyria.png';

function Slider (){
    return(
        <div className='mt-5'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Erudiclon} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Intena} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Yachay} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Kyria} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>

    )
}
export default Slider