import React from "react";
import { DeviceList, SearchBar } from "../../../styles";
import { Navbar } from "../../Navbar/Navbar";
import { DevicesCard } from "../../DevicesCard/DevicesCard";

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
          <DevicesCard />
        </div>
      </DeviceList>
    </div>
  );
};
