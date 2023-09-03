import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filterTags">
        <div className="filterTag">
          <span className="tag">Javascript</span>
          <span className="remove">
            <img src="public\images\icon-remove.svg" />
          </span>
        </div>
        <div className="filterTag">
          <span className="tag">React</span>
          <span className="remove">
            <img src="public\images\icon-remove.svg" />
          </span>
        </div>
        <div className="filterTag">
          <span className="tag">Angular</span>
          <span className="remove">
            <img src="public\images\icon-remove.svg" />
          </span>
        </div>
      </div>
      <div className="filterClearBtn">Clear</div>
    </div>
  );
};

export default Filter;
