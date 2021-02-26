# @feca-hooks/use-scroll

React Hook to **create scroll event faster and easier.**

<br />

## How to Install

#### yarn

`yarn add @feca-hooks/use-scroll`

#### npm

`npm i @feca-hooks/use-scroll`

<br />

## Usage

### Code

```
import React from "react";
import useScroll from "@feca-hooks/use-scroll";

function App() {
  const onScroll = () => {
    console.log("Scrolling now.");
  };

  const { scrollX, scrollY } = useScroll(onScroll);

  return <h1>Scroll Position: { scrollX } / { scrollY }</h1>;
}
```

### Arguments

| **Argument** | **Type** | **Description**                                           | **Required** |
| ------------ | -------- | --------------------------------------------------------- | ------------ |
| onScroll     | function | The callback function executed when scroll event happens. | no           |

### Return

| **Return value** | **Type** | **Description**                                                          | **Default value**            |
| ---------------- | -------- | ------------------------------------------------------------------------ | ---------------------------- |
| Coords           | object   | An object containing the x, y coordinates of the current scroll position | `{ scrollX: 0, scrollY: 0 }` |
