import React from "react";
import style from "./custom.module.css";
function StylesInReact() {
  return (
    <div>
      <h1 className="primary">Style with 1st Way</h1>
      <h1 style={{ color: "red", backgroundColor: "black" }}>
        Style with 2nd Way
      </h1>
      <h1 className={style.success}>Style with custom.module.css</h1>
    </div>
  );
}
export default StylesInReact;
