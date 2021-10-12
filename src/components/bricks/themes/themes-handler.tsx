import Chips from "./chips/chips";
import Dropdown from "./dropdown/dropdown";

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
