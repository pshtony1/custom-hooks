# @feca-hooks/use-input

React Hook to **create input element faster.**

<br />

## How to Install

#### yarn

`yarn add @feca-hooks/use-input`

#### npm

`npm i @feca-hooks/use-input`

<br />

## Usage

### Code

```
import React from "react";
import useInput from "@feca-hooks/use-input";

function App() {
  // validator must return true/false.
  const validator = () => {
    if (value.length > 10) return false;

    return true;
  };

  const { value, onChange } = useInput("", validator);

  return <input type="text" onChange={onChange} />;
}
```

### Arguments

| **Argument** | **Type** | **Description**                                            | **Required** |
| ------------ | -------- | ---------------------------------------------------------- | ------------ |
| defaultValue | string   | Default value of the input text.                           | no           |
| validator    | function | The callback function validate the input value can change. | no           |

### Return

| **Return value** | **Type** | **Description**                                                                                                                                   |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Value State      | object   | An object containing the `value`, `onChange`. `value` is current input value. `onChange` is event function executes when input value has changed. |
