import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="card border-info mb-3 p-3 shadow bg-body-tertiary rounded">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 mb-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt=""
                    className="img-fluid rounded"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
