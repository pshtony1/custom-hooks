# @feca-hooks/use-title

React Hook to **update your document's title.**

<br />

## How to Install

#### yarn

`yarn add @feca-hooks/use-title`

#### npm

`npm i @feca-hooks/use-title`

<br />

## Usage

### Code

```
import React from "react";
import useTitle from "@feca-hooks/use-title";

function App() {
  useTitle("This is Title");
  return <h1>Hello!</h1>;
}
```

### Arguments

| **Argument** | **Type** | **Description**                            | **Required** |
| ------------ | -------- | ------------------------------------------ | ------------ |
| title        | string   | The title you want to set on your document | yes          |
