import React from "react"
import { Typography, Grid } from "@material-ui/core"

export const StopDurationAirline = ({ classes, stop, duration, airline }) => (
  <Grid container className={classes.stopDurationAirline} spacing={1}>
    <Grid item>
      <Typography variant="body2" className={classes.body2MediumEmphasis}>
        {stop + " . "}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body2" className={classes.body2MediumEmphasis}>
        {" " + duration + " . "}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body2" className={classes.body2MediumEmphasis}>
        {" " + airline}
      </Typography>
    </Grid>
  </Grid>
)
