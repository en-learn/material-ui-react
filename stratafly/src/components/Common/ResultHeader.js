import React from "react"
import { Typography, Grid, makeStyles } from "@material-ui/core"

export const ResultHeader = ({ icon1, text, icon2 }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={8}>
        <HeaderIconAndLabel icon={icon1} text={text} />
      </Grid>

      <Grid item xs={4}>
        <HeaderRightIcon icon={icon2} />
      </Grid>
    </Grid>
  )
}

const HeaderIconAndLabel = ({ icon, text }) => (
  <Grid container direction="row" alignItems={"center"} spacing={2}>
    <Grid item> {icon}</Grid>

    <Grid item>
      <Typography variant="subtitle1" color="secondary">
        {text}
      </Typography>
    </Grid>
  </Grid>
)

const HeaderRightIcon = ({ icon }) => (
  <Grid container justify="flex-end">
    <Grid item>{icon}</Grid>
  </Grid>
)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}))
