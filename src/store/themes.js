import { createTheme } from "@mui/material"
import _ from "lodash"

const themes = {}

const commonTheme = {
  palette: {},
  components: {}
}

;["light", "dark"].forEach((mode) => {
  themes[mode] = createTheme(
    _.merge({}, commonTheme, {
      palette: { mode }
    })
  )
})

export default themes
