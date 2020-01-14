import React from "react"
import { Typography, Grid } from "@material-ui/core"

export const StopDurationAirline = ({ classes, stop, duration, airline }) => (
  <Grid container className={classes.stopDurationAirline} spacing={1}>
    <Grid item>
      <Body2 classes={classes} content={stop} />
    </Grid>
    <Body2 classes={classes} content={"."} />
    <Grid item>
      <Body2 classes={classes} content={duration} />
    </Grid>
    <Body2 classes={classes} content={"."} />
    <Grid item>
      <Body2 classes={classes} content={airline} />
    </Grid>
  </Grid>
)

const Body2 = ({ content, classes }) => (
  <Typography variant="body2" className={classes.body2MediumEmphasis}>
    {content}
  </Typography>
)
