import Chips from "./chips/Chips";
import Dropdown from "./dropdown/Dropdown";

export default function ThemesHandler() {
  return (
    <div className="columns">
      <div className="column is-narrow">
        <Dropdown />
      </div>
      <div className="column">
        <Chips />
      </div>
    </div>
  );
}
