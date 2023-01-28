import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="btn btn-secondary d-inline"
      >
        Listen
      </a>

      <p className="d-inline p-3">{props.phonetic.text}</p>
    </div>
  );
}
