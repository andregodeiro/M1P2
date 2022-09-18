import { Button, DeviceList, SearchBar } from "../../../styles";
import { HomeDeviceCard } from "../../HomeDeviceCard/HomeDeviceCard";
import { Navbar } from "../../Navbar/Navbar";

export const Devices = () => {
  return (
    <div>
      <Navbar />
      <SearchBar>
        <div>
          <form action="">
            <input
              type="text"
              placeholder="Insira o nome de um dispositivo..."
            />
          </form>
        </div>
      </SearchBar>
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
