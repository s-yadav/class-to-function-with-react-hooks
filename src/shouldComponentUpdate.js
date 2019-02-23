import React, { useMemo, useState } from "react";

export class ClassShouldUpdateExample extends React.Component {
  state = {
    count: 0,
    trackerCount: 0
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
  }
  render() {
    const { count, trackerCount } = this.state;
    console.log("Rendering Class Component");
    return (
      <div>
        <p>Current Count: {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ trackerCount: count + 1 })}>
          Track
        </button>
      </div>
    );
  }
}

export function FunctionShouldUpdateExample() {
  const [count, setCount] = useState(0);
  const [trackerCount, setTrackerCount] = useState(0);

  return useMemo(
    () => {
      console.log("Rendering Functional Component");
      return (
        <div>
          <p>Current Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button
            onClick={() =>
              setTrackerCount(prevTrackerCount => prevTrackerCount + 1)
            }
          >
            Track
          </button>
        </div>
      );
    },
    [count]
  );
}
