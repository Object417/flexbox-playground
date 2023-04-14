import { createSlice } from "@reduxjs/toolkit"

const flexboxSlice = createSlice({
  name: "flexbox",
  initialState: {
    numItems: 8,
    itemsRandomHeight: false,
    itemsRandomWidth: false,
    gap: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start"
  },
  reducers: {
    setNumItems(state, { payload }) {
      state.numItems = payload
    },
    setItemsRandomHeight(state, { payload }) {
      state.itemsRandomHeight = Boolean(payload)
    },
    toggleItemsRandomHeight(state) {
      state.itemsRandomHeight = !state.itemsRandomHeight
    },
    setItemsRandomWidth(state, { payload }) {
      state.itemsRandomWidth = Boolean(payload)
    },
    toggleItemsRandomWidth(state) {
      state.itemsRandomWidth = !state.itemsRandomWidth
    },
    setGap(state, { payload }) {
      state.gap = payload
    },
    setDisplay(state, { payload }) {
      state.display = payload
    },
    setFlexDirection(state, { payload }) {
      state.flexDirection = payload
    },
    setFlexWrap(state, { payload }) {
      state.flexWrap = payload
    },
    setJustifyContent(state, { payload }) {
      state.justifyContent = payload
    },
    setAlignContent(state, { payload }) {
      state.alignContent = payload
    },
    setAlignItems(state, { payload }) {
      state.alignItems = payload
    }
  }
})

export function flexboxSelector(state) {
  return state.flexbox
}

export const {
  setNumItems,
  setItemsRandomHeight,
  toggleItemsRandomHeight,
  setItemsRandomWidth,
  toggleItemsRandomWidth,
  setGap,
  setDisplay,
  setFlexDirection,
  setFlexWrap,
  setJustifyContent,
  setAlignContent,
  setAlignItems
} = flexboxSlice.actions

export default flexboxSlice.reducer
