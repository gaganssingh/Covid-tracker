import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api/covidAPI";

import classes from "./CountrySelector.module.css";

const CountrySelector = ({ onCountrySelection }) => {
   const [fetchedCountries, setFetchedCountries] = useState([]);

   // Fetch the list of available countries in
   // the database. Displayed as the select field options
   useEffect(() => {
      const fetchAPI = async () => {
         setFetchedCountries(await fetchCountries());
      };

      fetchAPI();
   }, [setFetchedCountries]);

   return (
      <FormControl className={classes.formControl}>
         <NativeSelect
            defaultValue=""
            onChange={(e) => {
               onCountrySelection(e.target.value);
            }}
         >
            <option value="">Global</option>
            {fetchedCountries.map((country, i) => (
               <option key={i} value={country}>
                  {country}
               </option>
            ))}
         </NativeSelect>
      </FormControl>
   );
};

export default CountrySelector;
