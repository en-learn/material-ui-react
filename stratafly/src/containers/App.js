import React, { Component } from "react"

import { MuiThemeProvider } from "@material-ui/core/styles"
import { Theme } from "../Theme"

import { Desktop } from "../components/Desktop"
import { AppHeader } from "../components/AppHeader"
import { SearchForm } from "../components/SearchForm"

class App extends Component {
  render() {
    if (window.screen.width >= 1024 && window.screen.height >= 768)
      return <Desktop />

    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <SearchForm
          selectedRadio={"round-trip"}
          onChangeRadio={() => console.log("Changed trip type")}
          onClickTraveller={() => console.log("Clicked traveller")}
          totalTravellers={"1"}
        />
      </MuiThemeProvider>
    )
  }
}
export default App
