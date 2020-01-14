import React from "react"

import { AddCircleOutline as AddTraveller } from "@material-ui/icons"
import { RemoveCircleOutline as RemoveTraveller } from "@material-ui/icons"
import { Typography, IconButton, Grid } from "@material-ui/core"

export const AddRemoveTraveller = ({
  type,
  count,
  onAdd,
  onRemove,
  disableRemove,
  disableAdd,
}) => (
  <Grid container justify="center">
    <Grid item xs={12} />
    <RemoveCountAdd
      type={type}
      count={count}
      onAdd={onAdd}
      onRemove={onRemove}
      disableRemove={disableRemove}
      disableAdd={disableAdd}
    />
  </Grid>
)
const RemoveCountAdd = ({
  type,
  count,
  onAdd,
  onRemove,
  disableRemove,
  disableAdd,
}) => {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <IconButton
          color="secondary"
          disabled={disableRemove}
          onClick={() => onRemove(count, type)}
        >
          <RemoveTraveller />
        </IconButton>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1" color="textPrimary">
          {count}
        </Typography>
      </Grid>

      <Grid item>
        <IconButton
          color="secondary"
          disabled={disableAdd}
          onClick={() => onAdd(count, type)}
        >
          <AddTraveller />
        </IconButton>
      </Grid>
    </Grid>
  )
}
