import React from "react";

const Sort = ({ value, onChange }) => {
  return (
    <div className="sort">
      <select
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="relevance">By relevance</option>
        <option value="name">By name</option>
        <option value="price_asc">By price ↑</option>
        <option value="price_desc">By price ↓</option>
      </select>
    </div>
  );
};

export default Sort;