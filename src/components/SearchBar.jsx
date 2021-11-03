import React, { useState, useEffect } from "react";

export const SearchBar = ({ getQueryText }) => {
  const [inputText, setInputText] = useState("");

  const userQuery = (queryText) => {
    setInputText(queryText);
    getQueryText(queryText);
  };

  return (
    <section className="search-bar">
      <form>
        <label>Search</label>
        <input
          onChange={(e) => userQuery(e.target.value)}
          type="text"
          placeholder="Search Character.."
        />
      </form>
    </section>
  );
};
