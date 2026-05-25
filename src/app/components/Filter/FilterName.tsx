import { useState } from "react";

type Props = {
  setNameFilter: (value: string) => void;
};

const FilterName = ({ setNameFilter }: Props) => {
  const [filter, setFilter] = useState("");

  return (
    <div className="charaterFilter">
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setNameFilter(filter);
          }
        }}
        placeholder="Search by name..."
      />

      <button onClick={() => setNameFilter(filter)}>Search Name</button>
    </div>
  );
};

export default FilterName;
