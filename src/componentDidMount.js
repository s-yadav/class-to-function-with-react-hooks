import React, { Component, useState, useRef, useEffect } from "react";

function doSomething(type) {
  console.log(`Hello I am a ${type} Component`);
}

function doSomethingAsync(type) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

export class ClassMountExample extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    doSomething();
    doSomethingAsync().then(() => {
      console.log(`ClassComponent's state: ${this.state.count}`);
    });
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

export function FunctionMountExample(props) {
  const [count, setCount] = useState(0);

  const handle = useCurrentCallback(() => {
    console.log(`ClassComponent's state: ${count}`);
  });

  useEffect(() => {
    doSomething("Functional");
  }, []);

  useEffect(() => {
    // doSomethingAsync().then(() => {
    //   console.log(`FunctionalComponent's state: ${count}`);
    // });
    doSomethingAsync().then(handle);
  }, []);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
