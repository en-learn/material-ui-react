import React from "react"
import Grid from "@material-ui/core/Grid"
import { CustomInputBase } from "../../Common/CustomInputBase"

export const RoundTripDates = ({
  classes,
  onFromDateChange,
  onToDateChange,
  fromDate,
  toDate,
  icon,
}) => (
  <Grid container spacing={1}>
    <Grid item xs={6}>
      <CustomInputBase
        onChange={onFromDateChange}
        value={fromDate}
        type={"date"}
        icon={icon}
      />
    </Grid>
    <Grid item xs={6}>
      <CustomInputBase
        onChange={onToDateChange}
        value={toDate}
        type={"date"}
        icon={icon}
      />
    </Grid>
  </Grid>
)

export const OneWayDate = ({ fromDate, onFromDateChange, icon }) => (
  <Grid container>
    <Grid item xs={12}>
      <CustomInputBase
        onChange={onFromDateChange}
        type="date"
        value={fromDate}
        icon={icon}
      />
    </Grid>
  </Grid>
)
