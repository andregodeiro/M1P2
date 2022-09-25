import React, { useState, useEffect } from "react";
import { userDeviceList, deleteDevice } from "../../services/api";
import { DeviceCard } from "../../styles";
import { Loading } from "../Loading/Loading";
import { Button, Input } from "../../styles";
import styles from "../UserDevicesList/styles.css";
import { Swtich } from "../Switch/Swtich";
import Modal from "react-modal";

export const UserDevicesList = () => {
  const [userDevicesList, setDevicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deviceModal, setDeviceModal] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openAndSet = (device) => {
    setDeviceModal(device);
    openModal();
    console.log(deviceModal);
  };

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

                    <Swtich />

                    <Button
                      className="details-btn"
                      onClick={() => openAndSet(device)}
                    >
                      Detalhes
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
          contentLabel="User daevices details"
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
