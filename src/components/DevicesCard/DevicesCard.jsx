import React, { useState, useEffect } from "react";
import { Button, DeviceCard } from "../../styles";
import { getDevice } from "../../services/api";
import { Loading } from "../Loading/Loading";

export const DevicesCard = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getDevice();
      setDevices(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  console.log(devices);
  return (
    <div>
      <DeviceCard>
        <ul>
          {devices.map((device) => (
            <li key={device._id}>
              <div className="userDeviceCard">
                <div className="deviceImage">
                  <img src={device.photoUrl} alt={device.name} />
                </div>

                <div className="deviceData">
                  <h3>{device.name}</h3>
                  <Button>
                    <a href="./">Adicionar</a>{" "}
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </DeviceCard>
    </div>
  );
};

export default DevicesCard;
