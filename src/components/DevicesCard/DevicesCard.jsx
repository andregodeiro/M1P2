import React from "react";
import { Button, DeviceCard } from "../../styles";

export const DevicesCard = () => {
  return (
    <div>
      <DeviceCard>
        <div className="userDeviceCard">
          <div className="deviceImage">
            <img src="https://i.imgur.com/STd3rUK.jpg" alt="alexa" />
          </div>

          <div className="deviceData">
            <h3>Device Name</h3>
            <Button>
              <a href="./">Adicionar</a>{" "}
            </Button>
          </div>
        </div>
      </DeviceCard>
    </div>
  );
};

export default DevicesCard;
