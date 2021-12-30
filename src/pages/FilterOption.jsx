import React, { useEffect, useState } from "react";
import "./FilterOption.css";

function FilterOption({ extra, Icon, title, className }) {
  console.log({ extra, Icon, title, className });
  const [reload, setReload] = useState(false);

  let theClass = "filterOption " + className;
  return (
    <div className={theClass} id={"entry" + title}>
      {Icon ? <Icon className="image__gradient" /> : ""}
      <p>{title}</p>
    </div>
  );
}

export default FilterOption;
