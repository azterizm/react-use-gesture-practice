import React from "react";
import { useSpring, animated as a } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./styles.css";

const App = () => {
  const [props, set] = useSpring(() => ({
    x: 0,
    y: 0,
    fontWeight: 200,
    scale: 1
  }));

  const bind = useDrag(({ down, movement: [x, y] }) => {
    set({
      x: down ? x : 0,
      y: down ? y : 0,
      scale: down ? 1.2 : 1,
      fontWeight: down ? 800 : 200,
      immediate: down
    });
  });

  return (
    <a.button {...bind()} style={props}>
      springs
    </a.button>
  );
};

export default App;
