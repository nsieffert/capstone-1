import React, { useState } from "react";
import "../filter.css";

//search function
function Filter(props) {
  const [value, setValue] = useState("");
  function search() {
    props.searchCategories(value);
  }
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          setValue(e.target.value);
          search(value);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Filter;
