import {
  Container,
  FormControlLabel,
  FormGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Slider
} from "@mui/material"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  flexboxSelector,
  setAlignContent,
  setAlignItems,
  setDisplay,
  setFlexDirection,
  setFlexWrap,
  setGap,
  setJustifyContent,
  setNumItems
} from "@/store/slices/flexboxSlice"

function FlexboxControls() {
  const dispatch = useDispatch()
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

  function handleDisplayChange(e, newVal) {
    if (newVal === null) {
      return
    }
    dispatch(setDisplay(newVal))
  }
  function handleNumItemsChange(e, newVal) {
    if (newVal === null) {
      return
    }
    dispatch(setNumItems(newVal))
  }
  function handleGapChange(e, newVal) {
    if (newVal === null) {
      return
    }
    dispatch(setGap(newVal))
  }
  function handleFlexDirectionChange(e, newVal) {
    if (newVal === null) {
      return
    }
    dispatch(setFlexDirection(newVal))
  }
  function handleFlexWrapChange(e, newVal) {
    if (newVal === null) {
      return
    }
    dispatch(setFlexWrap(newVal))
  }
  function handleJustifyContentChange(e, newVal) {
    if (newVal === null) {
      return
    }
    dispatch(setJustifyContent(newVal))
  }
  function handleAlignContentChange(e, newVal) {
    if (newVal === null) {
      return
    }
    dispatch(setAlignContent(newVal))
  }
  function handleAlignItemsChange(e, newVal) {
    if (newVal === null) {
      return
    }
    dispatch(setAlignItems(newVal))
  }

  return (
    <Container disableGutters>
      <section>
        <Typography variant="h4" component="h2">
          Container Properties
        </Typography>
        <FormGroup>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1">Display</Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={display}
              onChange={handleDisplayChange}
            >
              <ToggleButton value="flex">flex</ToggleButton>
              <ToggleButton value="block">block</ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Items</Typography>
            <Slider
              sx={{ maxWidth: "10rem" }}
              value={numItems}
              onChange={handleNumItemsChange}
              min={0}
              max={20}
              step={1}
              marks
            />
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1">Gap</Typography>
            <Slider
              sx={{ maxWidth: "10rem" }}
              value={gap}
              onChange={handleGapChange}
              min={0}
              max={3}
              step={0.25}
              marks
            />
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1">Direction</Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={flexDirection}
              onChange={handleFlexDirectionChange}
            >
              <ToggleButton value="row">row</ToggleButton>
              <ToggleButton value="row-reverse">row-reverse</ToggleButton>
              <ToggleButton value="column">column</ToggleButton>
              <ToggleButton value="column-reverse">column-reverse</ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1">Wrap</Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={flexWrap}
              onChange={handleFlexWrapChange}
            >
              <ToggleButton value="nowrap">nowrap</ToggleButton>
              <ToggleButton value="wrap">wrap</ToggleButton>
              <ToggleButton value="wrap-reverse">wrap-reverse</ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1">Justify Content</Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={justifyContent}
              onChange={handleJustifyContentChange}
            >
              <ToggleButton value="flex-start">flex-start</ToggleButton>
              <ToggleButton value="flex-end">flex-end</ToggleButton>
              <ToggleButton value="center">center</ToggleButton>
              <ToggleButton value="space-between">space-between</ToggleButton>
              <ToggleButton value="space-around">space-around</ToggleButton>
              <ToggleButton value="space-evenly">space-evenly</ToggleButton>
              <ToggleButton value="stretch" disabled>
                stretch
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1">Align Content</Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={alignContent}
              onChange={handleAlignContentChange}
            >
              <ToggleButton value="flex-start">flex-start</ToggleButton>
              <ToggleButton value="flex-end">flex-end</ToggleButton>
              <ToggleButton value="center">center</ToggleButton>
              <ToggleButton value="space-between">space-between</ToggleButton>
              <ToggleButton value="space-around">space-around</ToggleButton>
              <ToggleButton value="space-evenly">space-evenly</ToggleButton>
              <ToggleButton value="stretch">stretch</ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1">Align Items</Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={alignItems}
              onChange={handleAlignItemsChange}
            >
              <ToggleButton value="flex-start">flex-start</ToggleButton>
              <ToggleButton value="flex-end">flex-end</ToggleButton>
              <ToggleButton value="center">center</ToggleButton>
              <ToggleButton value="space-between">space-between</ToggleButton>
              <ToggleButton value="space-around">space-around</ToggleButton>
              <ToggleButton value="space-evenly">space-evenly</ToggleButton>
              <ToggleButton value="stretch">stretch</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </FormGroup>
      </section>
    </Container>
  )
}

export default FlexboxControls
