import React from "react";

import { ClassStateExample, FunctionStateExample } from "./state";

import TestUseInteval from "./createUseEffect";

import {
  ClassConstructorExample,
  FunctionConstructorExample
} from "./constructor";

import {
  ClassDerivedStateExample,
  FunctionDerivedStateExample
} from "./getDerivedStateFromProps";

import { ClassMountExample, FunctionMountExample } from "./componentDidMount";

import {
  ClassShouldUpdateExample,
  FunctionShouldUpdateExample
} from "./shouldComponentUpdate";

import {
  ClassDidUpdateExample,
  FunctionDidUpdateExample
} from "./componentDidUpdate";

import {
  ClassWillUnmountExample,
  FunctionWillUnmountExample
} from "./componentWillUnmount";

function getComponent(ClassComponent, ConstructorClassComponent) {
  return () => {
    return (
      <>
        <section>
          <h2>Class Component</h2>
          <ClassComponent />
        </section>
        <section>
          <h2>Functional Component</h2>
          <ConstructorClassComponent />
        </section>
      </>
    );
  };
}

const routes = [
  {
    label: "State",
    path: "/state",
    component: getComponent(ClassStateExample, FunctionStateExample)
  },
  {
    label: "constructor",
    path: "/constructor",
    component: getComponent(ClassConstructorExample, FunctionConstructorExample)
  },
  {
    label: "getDerivedStateFromProps",
    path: "/getDerivedStateFromProps",
    component: getComponent(
      ClassDerivedStateExample,
      FunctionDerivedStateExample
    )
  },
  {
    label: "componentDidMount",
    path: "/componentDidMount",
    component: getComponent(ClassMountExample, FunctionMountExample)
  },
  {
    label: "shouldComponentUpdate",
    path: "/shouldComponentUpdate",
    component: getComponent(
      ClassShouldUpdateExample,
      FunctionShouldUpdateExample
    )
  },
  {
    label: "componentDidUpdate",
    path: "/componentDidUpdate",
    component: getComponent(ClassDidUpdateExample, FunctionDidUpdateExample)
  },
  {
    label: "componentWillUnmount",
    path: "/componentWillUnmount",
    component: getComponent(ClassWillUnmountExample, FunctionWillUnmountExample)
  },
  {
    label: "useInterval",
    path: "/use-interval",
    component: getComponent(TestUseInteval, TestUseInteval)
  }
];

export default routes;
