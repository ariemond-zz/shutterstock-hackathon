import React from "react";
import "./App.scss";
import { Header, HomePage } from "./components";

const URL = "https://api.shutterstock.com/v2/images/search";
const key = "?api_key=sE5XHMB3ifbH7GGlP5LjL5URZGzjPRIf";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
