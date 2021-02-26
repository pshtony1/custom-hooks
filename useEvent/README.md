# @feca-hooks/use-event

React Hook to **add event on element or component faster and easier.**

<br />

## How to Install

#### yarn

`yarn add @feca-hooks/use-event`

#### npm

`npm i @feca-hooks/use-event`

<br />

## Usage

### Code

```
import React from "react";
import useEvent from "@feca-hooks/use-event";

function App() {
  const onMouseEnter = (event) => {
    console.log(event.target);
  };

  const eventRef = useEvent("mouseEnter", onMouseEnter);

  return <div ref={eventRef}>Hover Me!</div>;
}
```

### Arguments

| **Argument** | **Type** | **Description**                                        | **Required** |
| ------------ | -------- | ------------------------------------------------------ | ------------ |
| eventType    | string   | The any vaild event type of event listener.            | yes          |
| onEvent      | function | The callback function executes when the event occured. | yes          |

### Return

| **Return value** | **Type**      | **Description**                                               |
| ---------------- | ------------- | ------------------------------------------------------------- |
| Ref of element   | object(`ref`) | You can apply custom event setting property `ref` using this. |
