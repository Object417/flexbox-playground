import React from "react"
import FlexItem from "./FlexItem"
import { css } from "@emotion/react"

function PlaceholderFlexItem() {
  return (
    <FlexItem
      css={css`
        visibility: hidden;
      `}
    >
      0
    </FlexItem>
  )
}

export default PlaceholderFlexItem
