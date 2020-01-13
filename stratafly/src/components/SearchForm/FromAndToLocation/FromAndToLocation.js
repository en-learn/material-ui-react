import React from "react"
import { Grid } from "@material-ui/core"
import { LocationOnOutlined as LocationIcon } from "@material-ui/icons"
import { CustomInputBase } from "../../Common/CustomInputBase"

export const FromAndToLocation = ({
  fromLocation,
  onChangeFromLocation,
  toLocation,
  onChangeToLocation,
  classes,
}) => {
  return (
    <Grid container>
      <Grid item xs={12} className={classes.textFields}>
        <CustomInputBase
          onChange={onChangeFromLocation}
          value={fromLocation}
          placeholder={"From"}
          type="text"
          icon={<LocationIcon className={classes.textFieldIcon} />}
        />
      </Grid>
      <Grid item xs={12} className={classes.textFields}>
        <CustomInputBase
          onChange={onChangeToLocation}
          value={toLocation}
          placeholder={"To"}
          type="text"
          icon={<LocationIcon className={classes.textFieldIcon} />}
        />
      </Grid>
    </Grid>
  )
}
