import { Navbar } from "../../Navbar/Navbar";
import { HomeDeviceCard } from "../../HomeDeviceCard/HomeDeviceCard";
import { DeviceList } from "../../../styles";
import { OpenWeather } from "../../OpenWeather/OpenWeather";
import { useContext } from "react";
import { AuthenticationContext } from "../../Context/Authentication";
import { WelcomeMessage } from "../../WelcomeMessage/WelcomeMessage";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <WelcomeMessage />
      <div className="weatherContainer">
        {" "}
        <OpenWeather />
      </div>
      <DeviceList>
        <div className="deviceList">
          <HomeDeviceCard />
          <HomeDeviceCard />
          <HomeDeviceCard />
        </div>
      </DeviceList>
    </div>
  );
};
export default Home;
