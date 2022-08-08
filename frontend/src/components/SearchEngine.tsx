import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ISearchResult from "../interfaces/ISearchResult";
const autofillData = require("../test/searchautofill.json");
function SearchEngine() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);

  const renderSearchResult = searchResults.map(
    (result: ISearchResult, index: number) => (
      <div
        key={index}
        className="search-result bg-light"
        style={{ marginTop: 40 * index }}
      >
        <Link
          to="/release/1000"
          className="search-result-link text-dark"
          onClick={() => resetSearch()}
        >
          {result.name}
        </Link>
      </div>
    )
  );

  const resetSearch = () => {
    setSearchResults([]);
    setInputValue("");
  };

  const updateSearchResult = () => {
    let tmpResult = autofillData.filter(function (obj: ISearchResult) {
      return obj.name.includes(inputValue);
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
  }, [inputValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 search-input"
        aria-label="Search"
        onKeyUp={(e: any) => setInputValue(e.target.value)}
      />
      <div className="search-result-container">{renderSearchResult}</div>
    </div>
  );
}

export default SearchEngine;
