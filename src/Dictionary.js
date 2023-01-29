import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "UC3M8QX3tKjcOrYAY7y8a1IW94Ci8CpMvbwjvL6jXOzb5vavDVVwjbAr";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="card border-primary mb-3 shadow bg-body-tertiary rounded">
          <div className="card-body">
            <h4 className="card-title">What word are you looking for?</h4>
            <form onSubmit={handleSubmit}>
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
        <Photos photos={photos} />{" "}
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
