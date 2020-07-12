import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import CountUp from "react-countup";
import classes from "./DisplayCard.module.css";
import Spinner from "../../../ui/Spinner";

const DisplayCard = (props) => {
   let renderData = <Spinner />;

   // Dynamic css styles; based on the type of
   // data to be displayed in the card
   let style = null;
   if (props.class === "infected") {
      style = {
         border: "5px solid rgba(0, 0, 255, 0.7)",
      };
   }
   if (props.class === "recovered") {
      style = {
         border: "5px solid rgba(0, 255, 0, 0.7)",
      };
   }
   if (props.class === "deaths") {
      style = {
         border: "5px solid rgba(255, 0, 0, 0.7)",
      };
   }

   if (props.count) {
      renderData = (
         <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={classes.card}
            style={style}
         >
            <CardContent>
               <Typography color="textSecondary" gutterBottom>
                  {props.title}
               </Typography>
               <Typography variant="h5">
                  <CountUp
                     start={0}
                     end={props.count.value}
                     duration={2.5}
                     separator=","
                  />
               </Typography>
               <Typography color="textSecondary">
                  {new Date(props.lastUpdate).toDateString()}
               </Typography>
               <Typography variant="body2">{props.description}</Typography>
            </CardContent>
         </Grid>
      );
   }

   return renderData;
};

export default DisplayCard;
