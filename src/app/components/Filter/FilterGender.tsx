type Props = {
  setGenderFilter: (value: string) => void;
};

const FilterGender = ({ setGenderFilter }: Props) => {
  const opctions = [
    { url: "", text: "All Genders" },
    { url: "male", text: "Male" },
    { url: "female", text: "Female" },
    { url: "genderless", text: "Genderless" },
    { url: "unknown", text: "Unknown" },
  ];

  return (
    <div className="charaterFilter">
      <select onChange={(e) => setGenderFilter(e.target.value)}>
        {opctions.map((option) => (
          <option key={option.url} value={option.url}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterGender;
