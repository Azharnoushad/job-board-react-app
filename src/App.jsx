import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import JobList from "./components/JobList";
import data from "../data.json";
const App = () => {
  const [filteredTag, setFilteredTag] = useState([]);

  const [jobData, setJobData] = useState(data);

  useEffect(() => {
    let newData = data.filter((job) => {
      return filteredTag.every((tag) => {
        return (
          job.role === tag ||
          job.level === tag ||
          job.languages.includes(tag) ||
          job.tools.includes(tag)
        );
      });
    });
    setJobData(newData);
  }, [filteredTag]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Filter filteredTag={filteredTag} setFilteredTag={setFilteredTag} />
        <JobList
          data={jobData}
          setFilteredTag={setFilteredTag}
          filteredTag={filteredTag}
        />
      </div>
    </div>
  );
};

export default App;
