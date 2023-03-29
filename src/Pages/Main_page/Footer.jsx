import "./Footer.css";
import logo from "../../IMG/LOGOMENU.png";
import facebook from "../../IMG/facebook.svg";
import instagram from "../../IMG/instagam.svg";
import youtube from "../../IMG/youtube.svg";
import { Link, useLocation } from "react-router-dom";

function Footer() {
    const {pathname} = useLocation()


  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  console.log();

  return (
    <div>
      <div className="card text-center w-100 mt-5 bg-dark">
        <div className="my-3">
          <img onClick={toTop} src={logo} alt="" />
        </div>
        <div className="redes d-flex justify-content-center gap-2 my-3">
          <a href="https://www.facebook.com/profile.php?id=100089772007208">
            <img src={facebook} alt="" />
          </a>
          <a href="https://instagram.com/bitatecomics?igshid=ZDdkNTZiNTM=">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.youtube.com/@bitatecomics">
            <img src={youtube} alt="" />
          </a>
        </div>
        <div className="card-footer text-muted">
          © Created by Erudiclon Proyect
        </div>
      </div>
    </div>
  );
}

export default Footer;
