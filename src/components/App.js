import React, { useState, useEffect } from "react";

import coronaImage from "../images/corona-image.png";
import { fetchData } from "../api/covidAPI";
import Cards from "./Cards/Cards";
import CountrySelector from "./CountrySelector/CountrySelector";
import classes from "./App.module.css";
import Chart from "./Chart/Chart";

const App = () => {
   const [data, setData] = useState({});
   const [country, setCountry] = useState("");

   useEffect(() => {
      const getData = async () => {
         const response = await fetchData();
         setData(response);
      };

      getData();
   }, []);

   const countrySelectionHandler = async (selectedCountry) => {
      const getDataFromApi = await fetchData(selectedCountry);
      setData(getDataFromApi);
      setCountry(selectedCountry);
   };

   return (
      <div className={classes.container}>
         <img src={coronaImage} className={classes.image} alt="COVID 19" />
         <Cards data={data} />
         <CountrySelector onCountrySelection={countrySelectionHandler} />
         <Chart data={data} country={country} />
      </div>
   );
};

export default App;
