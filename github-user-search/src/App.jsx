import React from "react";
import Search from "./components/Search";

const App = () => (
  <div style={{ padding: "40px", fontFamily: "Arial" }}>
    <h1 className="text-3xl font-bold underline text-black-600">
      GitHub User Search
    </h1>

    <Search />
  </div>
);

export default App;
