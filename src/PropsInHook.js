import React, { useEffect } from "react";

function PropsInHook(props) {
  useEffect(() => {
    console.warn("data");
  }, [props.data]);
  return (
    <div>
      <h3>Props in Hook</h3>
      <p>count:{props.count}</p>
      <p>data:{props.data}</p>
    </div>
  );
}
export default PropsInHook;
