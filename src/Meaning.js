import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="card border-warning mb-3 p-3 shadow bg-body-tertiary rounded">
        <h3 className="card-title">{props.meaning.partOfSpeech}</h3>
        <Synonyms synonyms={props.meaning.synonyms} />
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
