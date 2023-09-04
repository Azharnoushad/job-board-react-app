import React from "react";

const Filter = ({ filteredTag ,setFilteredTag}) => {

  let filteredTags = [...new Set(filteredTag)];

  const removeFilterTag = (tag) => {
    setFilteredTag((prevState)=>prevState.filter((item)=>item !== tag))
  }

  const clearFilteredTags = () => {
    setFilteredTag([])
  }
  
  return (
    <div className="filter">
      <div className="filterTags">
        {filteredTags.map((tag, i) => {
          return (
            <div className="filterTag" key={i}>
              <span className="tag">{tag}</span>
              <span className="remove" onClick={()=>removeFilterTag(tag)}>
                <img src="public\images\icon-remove.svg" />
              </span>
            </div>
          );
        })}
      </div>
      <div className="filterClearBtn" onClick={clearFilteredTags}>Clear</div>
    </div>
  );
};

export default Filter;
