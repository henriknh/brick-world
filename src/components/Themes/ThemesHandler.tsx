import { useEffect, useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import Chips from "./Chips/Chips";

interface IProps {}

export default function ThemesHandler(props: IProps) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <Dropdown />
      <Chips />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
