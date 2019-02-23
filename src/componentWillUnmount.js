import React, { Component, useState, useRef, useEffect } from "react";

function doSomething(type) {
  console.log(`Hello I am a ${type} Component`);
}

export class ClassWillUnmountExample extends Component {
  state = {
    count: 0
  };
  componentWillUnmount() {
    doSomething("Class");
    console.log(`ClassComponent's state: ${this.state.count}`);
  }
  render() {
    const { count } = this.state;
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

function useCurrentCallback(cb) {
  const ref = useRef(cb);
  ref.current = cb;
  return function(...args) {
    return ref.current(...args);
  };
}

export function FunctionWillUnmountExample(props) {
  const [count, setCount] = useState(0);

  const unmountHandler = useCurrentCallback(() => {
    console.log(`FunctionalComponent's state: ${count}`);
  });

  useEffect(() => {
    return () => {
      doSomething("Functional");
    };
  }, []);

  useEffect(() => {
    // return () => {
    //   console.log(`FunctionalComponent's state: ${count}`);
    // };

    return unmountHandler;
  }, []);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
