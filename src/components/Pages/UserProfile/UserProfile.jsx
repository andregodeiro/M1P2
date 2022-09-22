import React, { useContext } from "react";
import { AuthenticationContext } from "../../Context/Authentication";
import { Button, UserProfileCard } from "../../../styles";
import { Navbar } from "../../Navbar/Navbar";

export const UserProfile = () => {
  const { authenticated, logout } = useContext(AuthenticationContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Navbar />

      <Button>
        <div className="backButton">
          <a href="./">Voltar</a>
        </div>
      </Button>

      <UserProfileCard>
        <div className="profileCard">
          <h2>Perfil do Usuário</h2>

          <div className="profileData">
            <div className="userImage">
              <img src="https://i.imgur.com/7beNOEP.jpg" alt="" />
            </div>

            <div className="userData">
              <h5>Al Pacino</h5>
              <p>alpacino@example.com</p>
              <p>555-123-456</p>
            </div>
          </div>
          <div className="userAdress">
            <p>6831 Hollywood Blvd</p>
            <p>Los Angeles, CA</p>
            <p>90028-6102</p>
          </div>

          <div className="buttons">
            <Button>
              <a href="./">Editar</a>
            </Button>
            <a href="" onClick={handleLogout}>
              Sair
            </a>
            <p>{String(authenticated)}</p>
          </div>
        </div>
      </UserProfileCard>
    </div>
  );
};
