import React from "react";
import { Grid } from "@material-ui/core";

import classes from "./Cards.module.css";
import DisplayCard from "./DisplayCard/DisplayCard";

const Cards = ({ data }) => {
   // Destructuring incoming data from props
   const { confirmed, recovered, deaths, lastUpdate } = data;
   return (
      <div className={classes.container}>
         <Grid container spacing={3} justify="center">
            {/* Display card for INFECTED numbers */}
            <DisplayCard
               title="Infected"
               count={confirmed}
               lastUpdate={lastUpdate}
               description="Active Cases"
               class="infected"
            />

            {/* Display card for RECOVERED numbers */}
            <DisplayCard
               title="Recovered"
               count={recovered}
               lastUpdate={lastUpdate}
               description="Recoveries"
               class="recovered"
            />

            {/* Display card for Deaths numbers */}
            <DisplayCard
               title="Deaths"
               count={deaths}
               lastUpdate={lastUpdate}
               description="Total Deaths"
               class="deaths"
            />
         </Grid>
      </div>
   );
};

export default Cards;
