# @feca-hooks/use-prevent-leave

React Hook to **prompt the user for confirmation before leaving the page.**

<br />

## How to Install

#### yarn

`yarn add @feca-hooks/use-prevent-leave`

#### npm

`npm i @feca-hooks/use-prevent-leave`

<br />

## Usage

### Code

```
import React from "react";
import usePreventLeave from "@feca-hooks/use-prevent-leave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  const fetchData = async () => {
    enablePrevent();
    await fetchApi();
    disablePrevent();
  };

  return <button onClick={fetchData}>Fetch</button>;
}
```

### Return

| **Return value**       | **Type** | **Description**                                                                                                                   |
| ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| enable/disable Prevent | object   | An object containing functions `enablePrevent` and `disablePrevent`, use this functions to enable/disable the leaving prevention. |
