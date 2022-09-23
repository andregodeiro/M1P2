import React, { useState, useEffect } from "react";
import { Button, DeviceList, SearchBar } from "../../../styles";
import { Navbar } from "../../Navbar/Navbar";
import { DevicesCard } from "../../DevicesCard/DevicesCard";
import { Loading } from "../../Loading/Loading";
import { getDevice } from "../../../services/api";

export const Devices = () => {
  const [device, setDevice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getDevice();
      setDevice(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  console.log(device);

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
          <DevicesCard />
          <DevicesCard />
        </div>
      </DeviceList>
    </div>
  );
};
