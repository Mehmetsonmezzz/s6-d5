import React, { useState } from "react";

export default function Names(props) {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`names ${isOpen ? "open" : ""}`}>
      <div className="acc-title" onClick={() => setIsOpen(!isOpen)}>
        <div className="title">{title}</div>
        <div className="arrow">{`<`}</div>
      </div>
      {children}
    </div>
  );
}
