import React, { useState } from "react"

import { MuiThemeProvider } from "@material-ui/core/styles"
import { Theme } from "../Theme"
import { getDateToString, isObjectEmpty } from "../shared/util"
import { defaultTravellers, testFlights } from "../shared/app-constants"

import { Desktop } from "../components/Desktop"
import { AppHeader } from "../components/AppHeader"
import { SearchForm } from "../components/SearchForm"
import { TravellerDialog } from "../components/SearchForm/TravellerDialog"
import { Empty } from "../components/Empty"
import { SearchResults } from "../components/SearchResults"

const App = () => {
  const [departFlights] = useState(testFlights)
  const showEmpty = isObjectEmpty(departFlights)

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
        fromDate={getDateToString(new Date())}
        toDate={getDateToString(new Date())}
      />

      <TravellerDialog
        open={true}
        onClose={() => console.log("closingDialog")}
        onDone={() => console.log("Done")}
        personAgeCount={defaultTravellers}
        onAdd={() => console.log("Add travellers")}
        onRemove={() => console.log("Remove travellers")}
        showMaxWarning={false}
        showInfantWarning={false}
      />

      {showEmpty && <Empty />}
      {!showEmpty && (
        <SearchResults
          flights={departFlights}
          onSelect={() => console.log("Flight selected")}
        />
      )}
    </MuiThemeProvider>
  )
}
export default App
