import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div class="card border-primary mb-3">
        <div class="card-body">
          <h4 class="card-title">What word are you looking for?</h4>
          <form onSubmit={search}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              className="form-control"
            />
            <p className="form-text">
              i.g. sunset, astonishing, embarassment etc
            </p>
          </form>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}
