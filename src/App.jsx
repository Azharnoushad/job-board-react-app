import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import JobList from "./components/JobList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Filter />
        <JobList />
      </div>
    </div>
  );
};

export default App;
