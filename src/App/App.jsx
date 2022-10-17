import React from "react";
import TopNav from "../contents/Header/TopNav";
import HomePage from "../contents/IntroSectiom/IntroSection";

function App() {
  return (
    <div className="App">
      <main>
        {TopNav()}
        {HomePage()}
      </main>
    </div>
  );
}

export default App;
