import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "./components/SearchBar";
import { CharData } from "./components/CharData";

const App = () => {
  const [char, setChar] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchChar = async () => {
      const res = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(res.data);
      setChar(res.data);
      setIsPending(false);
    };
    fetchChar();
  }, [query]);

  return (
    <div className="wrapper">
      <SearchBar getQueryText={(queryText) => setQuery(queryText)} />

      <CharData isPending={isPending} char={char} />
    </div>
  );
};

export default App;
