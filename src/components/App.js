import React, { useState, useEffect } from "react";

import coronaImage from "../images/corona-image.png";
import { fetchData } from "../api/covidAPI";
import Cards from "./Cards/Cards";
import classes from "./App.module.css";

const App = () => {
   const [data, setData] = useState({});
   const [country, setCountry] = useState("");

   useEffect(() => {
      const getDataFromApi = async () => {
         const responseData = await fetchData();
      };

      getDataFromApi();
   });

   const onCountrySelection = async (selectedCountry) => {
      const getDataFromApi = await fetchData(selectedCountry);
      setData(getDataFromApi);
      setCountry(selectedCountry);
   };

   return (
      <div className={classes.container}>
         <img src={coronaImage} className={classes.image} alt="COVID 19" />
         <Cards data={data} />
         {/* <CountrySelector onCountrySelection={onCountrySelection} /> */}
         {/* <Chart data={data} country={country} /> */}
      </div>
   );
};

export default App;
