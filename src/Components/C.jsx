import React, { useContext } from "react";
import { mycontext } from "./Context";

export default function C() {
  const data = useContext(mycontext);

  return (
    <div>
      <h1>C comp</h1>
      <p>{data.name}</p>
    </div>
  );
}
