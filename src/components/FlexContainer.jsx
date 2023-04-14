import { css } from "@emotion/react"
import React from "react"
import { useSelector } from "react-redux"
import { flexboxSelector } from "../store/slices/flexboxSlice"
import { Box } from "@mui/material"

function FlexContainer({ children }) {
  const {
    numItems,
    itemsRandomHeight,
    itemsRandomWidth,
    gap,
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems
  } = useSelector(flexboxSelector)

  return (
    <Box
      sx={{
        display,
        gap,
        flexDirection,
        flexWrap,
        justifyContent,
        alignContent,
        alignItems,
        p: 1,
        bgcolor: "darkorchid",
        width: "30rem",
        height: "30rem",
        mx: "auto"
      }}
    >
      {children}
    </Box>
  )
}

export default FlexContainer
