import React, {
  Component,
  createRef,
  useState,
  useRef,
  useEffect
} from "react";

import createEffect from "create-effect";

export class ClassAnimateExample extends Component {
  state = {
    direction: "left"
  };
  wrapper = createRef();
  componentDidUpdate(prevProps) {
    const { point: prevPoint } = prevProps;
    const { point } = this.props;

    if (prevPoint < point) {
      this.moveTo("right");
    } else if (prevPoint > point) {
      this.moveTo("left");
    }
  }
  moveTo(direction) {
    this.setState({ direction });
    //do something to animate element to provide direction
    //animate(this.wrapper.current, direction);
  }
  render() {
    const { direction } = this.state;
    return <div ref={this.wrapper}>{`Direction: ${direction}`}</div>;
  }
}

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function FunctionAnimateExample(props) {
  const [direction, setDirection] = useState("left");
  const wrapper = useRef();

  const prevProps = usePrevious(props);

  useEffect(() => {
    if (prevProps && prevProps.point !== props.point) {
      const direction = prevProps.point < props.point ? "right" : "left";
      setDirection(direction);
      //do something to animate element to provide direction
      //animate(wrapper.current, direction);
    }
  });

  return <div ref={wrapper}>{`Direction: ${direction}`}</div>;
}

const useInterval = createEffect((handler, delay) => {
  const interval = setInterval(handler, delay);

  return () => {
    clearInterval(interval);
  };
});

function withRandomPoint(Component) {
  return function() {
    const [point, setPoint] = useState(false);

    useInterval(() => {
      const point = Math.ceil(Math.random() * 10);
      setPoint(point);
    }, 3000);

    return <Component point={point} />;
  };
}

export const ClassDidUpdateExample = withRandomPoint(ClassAnimateExample);
export const FunctionDidUpdateExample = withRandomPoint(FunctionAnimateExample);
