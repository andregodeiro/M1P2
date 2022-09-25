import React, { useState, useEffect } from "react";
import { userDeviceList, deleteDevice } from "../../services/api";
import { DeviceCard } from "../../styles";
import { Loading } from "../Loading/Loading";
import { Button } from "../../styles";

export const UserDevicesList = () => {
  const [userDevicesList, setDevicesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await userDeviceList();
      setDevicesList(response.data);
      setLoading(false);
    })();
  }, []);

  const deleteSelectedDevice = async (id) => {
    console.log("chamou");
    setLoading(true);
    await deleteDevice(id);
    const refresh = await userDeviceList();
    setDevicesList(refresh.data);
    setLoading(false);
  };

  console.log(userDevicesList);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <DeviceCard>
          <ul>
            {userDevicesList.map(({ device, _id }) => (
              <li key={device._id}>
                <div className="userDeviceCard">
                  <div className="deviceImage">
                    <img src={device.photoUrl} alt={device.name} />
                  </div>

                  <div className="deviceData">
                    <h3>{device.name}</h3>
                    <Button onClick={() => deleteSelectedDevice(_id)}>
                      Desparear
                    </Button>
                    <Button>Detalhes</Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </DeviceCard>
      )}
    </div>
  );
};
