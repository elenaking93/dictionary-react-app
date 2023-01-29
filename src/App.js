import React from "react";
import "bootswatch/dist/minty/bootstrap.min.css";
import "./App.css";

import oklogo from "./ok-dictionary-logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={oklogo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="victory" />
        </main>
        <footer className="App-footer">Coded by Olena Korol</footer>
      </div>
    </div>
  );
}
