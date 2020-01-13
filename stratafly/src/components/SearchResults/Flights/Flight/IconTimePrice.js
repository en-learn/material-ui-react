import React from "react"
import { FlightTimesAndCode } from "../../../Common/FlightTimesAndCode"
import { Typography, Grid } from "@material-ui/core"
import { AirlineToIcon } from "../../../../shared/app-constants"

export const IconTimePrice = ({ fromCode, toCode, classes, flight }) => (
  <Grid container className={classes.iconTimePrice}>
    <Grid item xs={1}>
      <AirlineIcon airline={flight.airline} classes={classes} />
    </Grid>

    <Grid item xs={6}>
      <FlightTimesAndCode
        depart={flight.depart}
        arrive={flight.arrive}
        fromCode={fromCode}
        toCode={toCode}
        classes={classes}
      />
    </Grid>

    <Grid item xs={5}>
      <Price price={flight.price} classes={classes} />
    </Grid>
  </Grid>
)

export const AirlineIcon = ({ airline, classes }) => {
  let airlineIcon = AirlineToIcon[airline]
  return (
    <Grid container justify="center">
      <Grid item className={classes.airlineImageContainer}>
        <img src={airlineIcon} alt="airline" className={classes.airlineImage} />
      </Grid>
    </Grid>
  )
}

export const Price = ({ price }) => (
  <Grid container justify="center">
    <Grid item>
      <Typography variant="subtitle1" color="secondary">
        {"$" + price}
      </Typography>
    </Grid>
  </Grid>
)
