import React from "react"
import { Grid } from "@material-ui/core"
import { TripType } from "./TripType"
import { Traveller } from "./Traveller"

export const TripTypeAndTraveller = ({
  selectedRadio,
  onChangeRadio,
  onClickTraveller,
  totalTravellers,
  classes,
}) => {
  return (
    <Grid container className={classes.tripTypeTraveller} alignItems="center">
      <Grid item xs={9}>
        <TripType selectedRadio={selectedRadio} onChangeRadio={onChangeRadio} />
      </Grid>

      <Grid item xs={3}>
        <Traveller
          onClickTraveller={onClickTraveller}
          totalTravellers={totalTravellers}
          classes={classes}
        />
      </Grid>
    </Grid>
  )
}
