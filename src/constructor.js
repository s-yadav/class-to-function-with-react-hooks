import React, { Component, useState, useRef } from "react";

function getInstanceId(type) {
  console.log(`Hello I am a ${type} Component`);
  return Math.random();
}

export class ClassConstructorExample extends Component {
  constructor(props) {
    super();
    const { start = 0 } = props;

    this.state = {
      count: start
    };

    this.instanceId = getInstanceId("Class");
  }
  render() {
    const { count } = this.state;
    console.log("Rendering Class Component");
    return (
      <div>
        <p>Current Count: {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

function useOnce(cb) {
  const ref = useRef({});
  if (!ref.current.called) {
    ref.current.value = cb();
    ref.current.called = true;
  }
  return ref.current.value;
}

export function FunctionConstructorExample(props) {
  const { start = 0 } = props;
  const [count, setCount] = useState(start);

  const instanceId = useOnce(() => {
    return getInstanceId("Functional");
  });

  console.log("Rendering Functional Component");

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
