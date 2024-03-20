import Select from "react-select";

const SelectTags = ({ register, onSelect }) => {
  const options = [
    { value: "programming", label: "Programming" },
    { value: "coding", label: "Coding" },
    { value: "softwareDevelopment", label: "SoftwareDevelopment" },
    { value: "webDevelopment", label: "WebDevelopment" },
    { value: "javaScript", label: "JavaScript" },
    { value: "css", label: "CSS" },
    { value: "artificialIntelligence", label: "ArtificialIntelligence" },
    { value: "technology", label: "Technology" },
    { value: "science", label: "Science" },
    { value: "travel", label: "Travel" },
    { value: "entertainment", label: "Entertainment" },
    { value: "opinion", label: "Opinion" },
  ];

  return (
    <Select
      {...register("tags", { required: "Please select must be 3 tags" })}
      className="w-full text-base font-normal placeholder:text-base text-slate-500 placeholder:italic"
      placeholder="Please select tags"
      onChange={onSelect}
      options={options}
    />
  );
};

export default SelectTags;
