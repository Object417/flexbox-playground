import { css, useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import React from "react"

function FlexItem({ children }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        p: 1,
        bgcolor: "orange",
        borderRadius: 1
      }}
    >
      {children}
    </Box>
  )
}

export default FlexItem
