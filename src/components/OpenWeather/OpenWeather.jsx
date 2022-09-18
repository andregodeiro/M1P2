// import { useEffect, useState } from "react";

// export const OpenWeather = () => {
//   //State
//   const [apidata, setApiData] = useState({});
//   const [getState, setGetState] = useState("natal");

//   //API KEY AND URL
//   const apiKey = process.env.REACT_APP_API_KEY;
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NATAL&appid=${apiKey}`;

//   //Side effect

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((data) => setApiData(data));
//   }, [apiUrl]);

//   return <div></div>;
// };
