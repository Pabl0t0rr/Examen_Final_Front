import { ChangeEvent } from "react";

type Props = {
  setStatusFilter: (value: string) => void;
};

const FilterStatus = ({ setStatusFilter }: Props) => {
  const opctions = [
    { url: "", text: "All Status" },
    { url: "alive", text: "Alive" },
    { url: "dead", text: "Dead" },
    { url: "unknown", text: "Unknown" },
  ];

  return (
    <div className="charaterFilter">
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        {opctions.map((option) => (
          <option key={option.url} value={option.url}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterStatus;
