# @feca-hooks/use-confirm

React Hook to **create confirm message faster and easier.**

<br />

## How to Install

#### yarn

`yarn add @feca-hooks/use-confirm`

#### npm

`npm i @feca-hooks/use-confirm`

<br />

## Usage

### Code

```
import React from "react";
import useConfirm from "@feca-hooks/use-confirm";

function App() {
  const onConfirm = () => {
    console.log("submit confirm!");
  };

  const openConfirm = useConfirm("Really?", onConfirm);

  return <button onClick={openConfirm}>Delete Something</button>;
}
```

### Arguments

| **Argument** | **Type** | **Description**                                        | **Required** |
| ------------ | -------- | ------------------------------------------------------ | ------------ |
| message      | string   | Message to show the user on the confirmation propmt.   | yes          |
| onConfirm    | function | The callback function executes when the user confirms. | yes          |
| onCancel     | function | The callback function executes when the user cancels.  | no           |

### Return

| **Return value** | **Type** | **Description**                                 |
| ---------------- | -------- | ----------------------------------------------- |
| function         | function | Function wrapped around the confirmation logic. |
