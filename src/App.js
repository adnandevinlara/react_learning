import React, { useState } from "react";

import "./styles.css";

import RenderLifeCycle from "./RenderLifeCycle";
import ComponentDidMount from "./ComponentDidMount";
import ComponentDidUpdate from "./ComponentDidUpdate";
import ShouldComponentUpdate from "./ShouldComponentUpdate";
import ComponentWillUnmount from "./ComponentWillUnmount";
import Hook from "./Hook";
import UseEffectHook from "./UseEffectHook";
import UseEffectHook3 from "./UseEffectHook3";
import StylesInReact from "./StylesInReact";
import Map from "./MapFunction";
import NestedMap from "./NestedMapFunction";
import ReUseCompoent from "./ReUseComponent";
import Fragment from "./Fragment";
import LiftingUp from "./ParentComponent";
import UseMemo from "./UseMemo";
import ControlledComponent from "./ControlledComponent";
import HOC from "./HOC";
// import pageLinks from "./Routing";
import Stat from "./StateObject";

import { CommonContext } from "./CommonContext";
export default function App() {
  const [name, setName] = React.useState("adnan");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      {/* <button type="button" class="btn btn-primary">
        Nutton
      </button> */}

      <RenderLifeCycle name={name} />
      {/* <button onClick={() => setName("zaib")}>Update Name</button> */}

      {/* <RenderLifeCycle /> */}
      {/* <ComponentDidMount /> */}
      {/* <ComponentDidUpdate /> */}
      {/* <ShouldComponentUpdate /> */}
      {/* <ComponentWillUnmount /> */}

      {/* <Hook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHook3 /> */}

      {/* <StylesInReact /> */}

      {/* <Map /> */}
      {/* <NestedMap /> */}

      {/* <ReUseCompoent /> */}

      {/* <Fragment /> */}

      {/* <LiftingUp /> */}

      {/* <UseMemo /> */}

      {/* <ControlledComponent /> */}
      {/* <HOC /> */}

      {/* routing issue ha sandbox pr */}
      {/* <pageLinks /> */}

      {/* <Stat /> */}

      {/* Common contact code */}

      {/* mere provider mein jo value jane walli ha wo yahan se jaegi */}
      {/* <CommonContext.Provider> */}
      {/* <h3>Complete and easy example of Context Api</h3> */}
      {/* </CommonContext.Provider> */}
    </div>
  );
}
