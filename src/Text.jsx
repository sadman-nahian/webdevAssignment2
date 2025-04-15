import React from "react";

function Text({ text }) {
  return (
    <div >
      <h2 className="text" key={text}>{text}  </h2>
    </div>
  );
}

export default Text;
