import React, { useState, useEffect, useContext } from "react";
import { Button, DeviceCard, Input } from "../../styles";
import { getDevice, addUserDevice } from "../../services/api";
import { Loading } from "../Loading/Loading";
import Modal from "react-modal";
import { AuthenticationContext } from "../Context/Authentication";
import styles from "../DevicesCard/styles.css";
import { LoadingBtn } from "../LoadingBtn/LoadingBtn";
import { filteredDevicesProvider } from "../SearchBar/SearchBar";

Modal.setAppElement("#root");

export const DevicesCard = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [deviceModal, setDeviceModal] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthenticationContext);
  // const { searchDevice } = useContext(filteredDevicesProvider);

  // console.log(searchDevice);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openAndSet = (device) => {
    setDeviceModal(device);
    openModal();
  };

  useEffect(() => {
    (async () => {
      const response = await getDevice();
      setDevices(response.data);
      setLoading(false);
    })();
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  const addDevice = async (device) => {
    console.log("chamou");

    setLoadingBtn(true);

    const deviceFormated = {
      user: user._id,
      device: device._id,
      is_on: false,
      local: "631b34696f2d2f24a7c0c960",
      room: "Quarto",
    };
    const teste = await addUserDevice(deviceFormated);
    console.log(teste);
    setLoadingBtn(false);
  };

  console.log(devices);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
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
                    <Button onClick={() => openAndSet(device)}>
                      Adicionar
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </DeviceCard>
      )}
      {Object.values(deviceModal).length !== 0 && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Device details"
          overlayClassName="modal-overlay"
          className="modal-card"
        >
          <div className="modal-container">
            <div className="device-container">
              <div className="device-img">
                <img src={deviceModal.photoUrl} alt={deviceModal.name} />
              </div>
              <div className="device-data">
                <h2>Dispositivo: {deviceModal.name}</h2>
                <h5>Fabricante: {deviceModal.madeBy}</h5>
                <p>{deviceModal.type}</p>
                <div className="device-local">
                  <div>
                    <label>Local de instalação: </label>
                    <select className="device-local-select">
                      <option>Casa</option>
                      <option>Escritório</option>
                      <option>Fábrica</option>
                    </select>
                  </div>
                </div>
                <Input
                  className="device-local-input"
                  placeholder="Onde o dispositivo está instalado?"
                />
              </div>
            </div>

            <div className="modal-btn">
              <Button
                onClick={() => addDevice(deviceModal)}
                disabled={loadingBtn}
                className="add-btn"
              >
                Adicionar{loadingBtn && <LoadingBtn />}
              </Button>
              <button className="btn-close-modal" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DevicesCard;
