import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Fetch GLOBAL and COUNTRY specific stats
export const fetchData = async (selectedCountry) => {
   let targetURL = BASE_URL;

   if (selectedCountry) {
      targetURL = `${BASE_URL}/countries/${selectedCountry}`;
   }

   try {
      const {
         data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(targetURL);
      return {
         confirmed,
         recovered,
         deaths,
         lastUpdate,
      };
   } catch (error) {
      console.log(error);
   }
};

// Fetch data for the Line Chart
export const fetchDailyData = async () => {
   try {
      const { data } = await axios.get(`${BASE_URL}/daily`);

      const modifiedData = data.map((dailyData) => ({
         confirmed: dailyData.confirmed.total,
         deaths: dailyData.deaths.total,
         date: dailyData.reportDate,
      }));

      return modifiedData;
   } catch (error) {
      console.log(error);
   }
};

// Fetch the list of countries from the API
export const fetchCountries = async () => {
   try {
      const {
         data: { countries },
      } = await axios.get(`${BASE_URL}/countries`);
      return countries.map((country) => country.name);
   } catch (error) {
      console.log(error);
   }
};
