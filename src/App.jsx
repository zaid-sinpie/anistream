import "./App.css";

import HomePage from "./components/HomePage";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [currentActiove, setCurrentActive] = useState("home");

  function handleActive(identifier) {
    setCurrentActive(identifier);
  }
  
  return (
    <>
      {/* <Header /> */}
      {currentActiove === "home" ? <HomePage /> : null}
    </>
  );
}

export default App;
