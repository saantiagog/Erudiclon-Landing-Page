import "./Creadores.css";
import personaje1 from "../../IMG/Rubén.png";
import personaje2 from "../../IMG/Santiago.png";
import facebook from "../../IMG/facebook.svg";
import instagram from "../../IMG/instagam.svg";

function Creadores() {
  return (
    <section className=" creadores container">
      <div>
        <h1>Creadores</h1>
      </div>
      <div className="cards">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <img className="img" src={personaje1} alt="" />
                <h5 className="card-title">Rubén Darío Tabares</h5>
                <p className="card-text">Productor de Multimedia</p>
                <div className="redescreadores">
                  <a href="">
                    <img src={instagram} alt="" />
                  </a>
                  <a href="">
                    <img src={facebook} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <img className="img" src={personaje2} alt="" />
                <h5 className="card-title">Santiago Gómez Henao</h5>
                <p className="card-text">Productor de Multimedia</p>
                <div className="redescreadores">
                  <a href="">
                    <img src={instagram} alt="" />
                  </a>
                  <a href="">
                    <img src={facebook} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creadores;
