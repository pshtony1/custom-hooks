# @feca-hooks/use-fadein

React Hook to **add fade-in animation faster and easier.**

<br />

## How to Install

#### yarn

`yarn add @feca-hooks/use-fadein`

#### npm

`npm i @feca-hooks/use-fadein`

<br />

## Usage

### Code

```
import React from "react";
import useFadeIn from "@feca-hooks/use-fadein";

function App() {
  // Arguments: fromOpacity, toOpacity, duration, cubicBezier, delay
  const fadeIn = useFadeIn(0.3, 1, 0.5, "ease-in-out", 0.5);

  return <h1 { ...fadeIn }>Hello, There!</h1>;
}
```

### Arguments

| **Argument** | **Type** | **Description**                       | **Required** | **Default value** |
| ------------ | -------- | ------------------------------------- | ------------ | ----------------- |
| fromOpacity  | number   | Start opacity of fade-in animation.   | no           | 0                 |
| toOpacity    | number   | End opacity of fade-in animation.     | no           | 1                 |
| duration     | number   | Duration of fade-in animation.        | no           | 0.3               |
| cubicBezier  | string   | Cubic bezier of fade-in animation.    | no           | "linear"          |
| delay        | number   | Animation delay of fade-in animation. | no           | 0                 |

### Return

| **Return value**           | **Type** | **Description**                                                                 | **Default value**                                   |
| -------------------------- | -------- | ------------------------------------------------------------------------------- | --------------------------------------------------- |
| Properties(`ref`, `style`) | object   | An object containing properties of element you want to apply fade-in animation. | `{ ref: element, style: { opacity: fromOpacity } }` |
