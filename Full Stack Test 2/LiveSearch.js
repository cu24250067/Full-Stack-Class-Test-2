import React, { useState } from "react";
function LiveSearch() {
  const names = [
    "Vikrant",
    "Rahul",
    "Aman",
    "Priya",
    "Ankit",
    "Neha",
    "Rohit",
    "Sneha",
    "Karan",
    "Pooja"
  ];
  const [search, setSearch] = useState("");
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h2>Q4. Live Search Filter</h2>
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredNames.length > 0 ? (
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
export default LiveSearch;