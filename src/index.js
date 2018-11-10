import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery";

import "./styles.css";

function App() {
  let images = [
    "https://images.unsplash.com/photo-1533514114760-4389f572ae26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ada6181447db788f0fc94d5d2e35c63&auto=format&fit=crop&w=1900&q=80",
    "https://images.unsplash.com/photo-1531860711453-b2f3b6453611?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2114d8ee32c521839c5f8ae9be79034&auto=format&fit=crop&w=1900&q=80",
    "https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=431cbc0324ac62078fcfeb68d92a9acd&auto=format&fit=crop&w=1900&q=80",
    "https://images.unsplash.com/photo-1515550962725-a254324472e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d5777bc4b7cff7bc02088bbc8fe2073&auto=format&fit=crop&w=1900&q=80"
  ];

  return (
    <div className="App">
      <Gallery images={images} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
