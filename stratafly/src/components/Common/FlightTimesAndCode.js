import React from "react"
import { Typography, Grid } from "@material-ui/core"
import { ArrowRightAlt as ArrowRight } from "@material-ui/icons"

export const FlightTimesAndCode = ({
  depart,
  arrive,
  fromCode,
  toCode,
  classes,
}) => (
  <Grid
    container
    alignItems="center"
    spacing={1}
    className={classes.flightTimesAndCode}
  >
    <Grid item>
      <TimeAirportCode time={depart} airportCode={fromCode} classes={classes} />
    </Grid>
    <Grid item>
      <ArrowRight />
    </Grid>
    <Grid item>
      <TimeAirportCode time={arrive} airportCode={toCode} classes={classes} />
    </Grid>
  </Grid>
)

export const TimeAirportCode = ({ time, airportCode, classes }) => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <Typography variant="subtitle2">{time}</Typography>
    </Grid>
    <Grid item>
      <Typography variant="body2" className={classes.body2MediumEmphasis}>
        {airportCode}
      </Typography>
    </Grid>
  </Grid>
)
