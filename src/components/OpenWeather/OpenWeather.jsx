import { useEffect, useState } from "react";
import styles from "../OpenWeather/styles.css";

export const OpenWeather = () => {
  // //State
  // const [apidata, setApiData] = useState({});
  // const [getState, setGetState] = useState("natal");

  // //API KEY AND URL
  // const apiKey = process.env.REACT_APP_API_KEY;
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NATAL&appid=${apiKey}`;

  // //Side effect

  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setApiData(data));
  // }, [apiUrl]);

  return (
    <div className="weather">
      <div className="weatherTile">
        <div className="imgBox"></div>
        <div className="infoBox">
          <p>35º C</p>
          <div className="cityData">
            <h3>Natal</h3>
            <h5>Rio Grande do Norte, Brasil</h5>
          </div>
          <div className="anotherData">
            <div className="humidityData">
              <img
                src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                alt=""
              />
              <p>Umidade</p>
            </div>
            <p>Condições</p>
          </div>
        </div>
      </div>
    </div>
  );
};
