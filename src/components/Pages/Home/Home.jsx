import { Navbar } from "../../Navbar/Navbar";
import { HomeDeviceCard } from "../../HomeDeviceCard/HomeDeviceCard";
import { DeviceList } from "../../../styles";
import { OpenWeather } from "../../OpenWeather/OpenWeather";

export const Home = () => {
  return (
    <div>
      <Navbar />
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
