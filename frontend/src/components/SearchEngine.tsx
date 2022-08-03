import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const autofillData = require("../test/searchautofill.json");
function SearchEngine() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const renderSearchResult = searchResults.map(
    (result: string, index: number) => (
      <div
        key={index}
        className="search-result bg-light"
        style={{ marginTop: 40 * index }}
      >
        <Link to="/" className="search-result-link text-dark">
          {result}
        </Link>
      </div>
    )
  );

  const updateSearchResult = () => {
    let tmpResult = autofillData.filter(function (str: string) {
      return str.includes(inputValue);
    });
    console.log(tmpResult);
    setSearchResults(tmpResult);
  };

  useEffect(() => {
    if (inputValue.length < 2) {
      setSearchResults([]);
      return;
    }
    updateSearchResult();
  }, [inputValue]);

  return (
    <div className="">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 search-input"
        aria-label="Search"
        onKeyUp={(e) => setInputValue(e.target.value)}
      />
      <div className="search-result-container">{renderSearchResult}</div>
    </div>
  );
}

export default SearchEngine;
