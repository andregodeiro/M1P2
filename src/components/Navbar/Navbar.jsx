import { NavbarComponent } from "../../styles";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarComponent>
      <div className="navbar">
        <div className="imgHeader">
          <img src="https://i.imgur.com/b1ujw9r.png" alt="" />
        </div>
        <div className="linksNavbar">
          <a href="./">Início</a>
          <Link to="/devices">
            <a>Dispositivos</a>
          </Link>
          <Link to="/profile">
            <a>Perfil do Usuário</a>
          </Link>
        </div>
      </div>
    </NavbarComponent>
  );
};
