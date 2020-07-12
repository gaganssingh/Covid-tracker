import React, { useState, useEffect } from "react";

import { fetchData } from "../api/covidAPI";
import Header from "./Header/Header";
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
         <Header />
         <Cards data={data} />
         <CountrySelector onCountrySelection={countrySelectionHandler} />
         <Chart data={data} country={country} />
      </div>
   );
};

export default App;
