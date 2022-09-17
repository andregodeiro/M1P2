import { NavbarComponent } from "../../styles";

export const Navbar = () => {
  return (
    <NavbarComponent>
      <div className="navbar">
        <div className="imgHeader">
          <img src="https://i.imgur.com/b1ujw9r.png" alt="" />
        </div>
        <div className="linksNavbar">
          <a href="./">Início</a>
          <a href="./">Adicionar Dispositivos</a>
          <a href="./">Perfil do Usuário</a>
        </div>
      </div>
    </NavbarComponent>
  );
};
