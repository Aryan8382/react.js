// import React, { useState } from 'react'
// import Child from './Child'

// export default function Props() {
//     const [state, setState] = useState({
//         name: "aryan",
//         email: "aryan@gmail.com"
//     });

//     return (
//         <div>
//             <h1>parent comp</h1>
//             <p>{state.name}</p>
//             <Child data={state} />

//         </div>
//     );
// }


import React, { useState } from "react";
import Child from "./Child";
import { mycontext } from "./Context";
import C from "./C";

export default function Props() {
  const [state] = useState({
    name: "aryan",
    email: "aryan@gmail.com",
  });

  return (
    <div>
      <h1>Parent comp</h1>
      <p>{state.name}</p>

      <mycontext.Provider value={state}>
        <Child />
        <C />
      </mycontext.Provider>
    </div>
  );
}
