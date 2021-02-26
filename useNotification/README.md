# @feca-hooks/use-notification

React Hook to **use browser notification easier.**

<br />

## How to Install

#### yarn

`yarn add @feca-hooks/use-notification`

#### npm

`npm i @feca-hooks/use-notification`

<br />

## Usage

### Code

```
import React from "react";
import useNotification from "@feca-hooks/use-notification";

function App() {
  const sendNotification = useNotification("Hello!");

  return <button onClick={sendNotification}>Send Hello</button>;
}
```

### Arguments

| **Argument** | **Type** | **Description**                                                                         | **Required** |
| ------------ | -------- | --------------------------------------------------------------------------------------- | ------------ |
| title        | string   | The text you want to notice.                                                            | yes          |
| options      | object   | [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification) | no           |

### Return

| **Return value** | **Type** | **Description**                                                          |
| ---------------- | -------- | ------------------------------------------------------------------------ |
| sendNotification | function | If permission is granted, you can send notification using this function. |
