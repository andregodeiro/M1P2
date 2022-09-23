import React, { useState, useEffect } from "react";
import { Button, DeviceList, SearchBar } from "../../../styles";
import { Navbar } from "../../Navbar/Navbar";
import { DevicesCard } from "../../DevicesCard/DevicesCard";
import { Loading } from "../../Loading/Loading";
import { getDevice } from "../../../services/api";
import userEvent from "@testing-library/user-event";

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
