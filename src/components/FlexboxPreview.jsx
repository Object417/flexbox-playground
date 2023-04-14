import { Container } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { flexboxSelector } from "@/store/slices/flexboxSlice"
import FlexContainer from "./FlexContainer"
import _ from "lodash"
import FlexItem from "./FlexItem"
import PlaceholderFlexItem from "./PlaceholderFlexItem"

function FlexboxPreview() {
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
    <Container disableGutters>
      <FlexContainer>
        {numItems > 0 ? (
          Array.from({ length: numItems }).map((el, idx) => (
            <FlexItem key={idx}>{idx + 1}</FlexItem>
          ))
        ) : (
          <PlaceholderFlexItem />
        )}
      </FlexContainer>
    </Container>
  )
}

export default FlexboxPreview
