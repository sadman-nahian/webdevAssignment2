import React from "react";

function Buttons({next,prev}) {
    
  return (
    <div className="buttons">
      <button onClick={prev}className="prev">{"<"}</button>
      <button onClick={next} className="next">{">"}</button>
    </div>
  );
}

export default Buttons;
