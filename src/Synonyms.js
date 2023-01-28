import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <p>
          <strong>Synonyms: </strong>
          {props.synonyms.map(function (synonym, index) {
            return <span key={index}>{synonym}; </span>;
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
