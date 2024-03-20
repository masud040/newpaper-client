const SelectTags = ({ onSelect }) => {
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
    <div className="flex flex-wrap gap-2 text-xs">
      {options?.map((tag) => (
        <label key={tag.value}>
          <input
            type="checkbox"
            onChange={(e) => onSelect(e, tag.value)}
            className="hidden peer"
          />
          <span className="px-2 py-1 text-white bg-indigo-500 rounded-lg peer-checked:bg-green-500">
            {tag.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default SelectTags;
