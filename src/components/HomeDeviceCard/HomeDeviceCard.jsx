import { Button, DeviceCard } from "../../styles";

export const HomeDeviceCard = () => {
  return (
    <div>
      <DeviceCard>
        <div className="userDeviceCard">
          <div className="deviceImage">
            <img src="https://i.imgur.com/STd3rUK.jpg" alt="ar condicionado" />
          </div>

          <div className="deviceData">
            <h3>Device Name</h3>
            <Button>
              <a href="./">Detalhes</a>{" "}
            </Button>
            <p>Status</p>
          </div>
        </div>
      </DeviceCard>
    </div>
  );
};
