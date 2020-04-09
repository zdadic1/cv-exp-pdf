import React from "react";
import "./Form.css";

export default (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <div className="pdf-container">
      <button className="button-export" onClick={createPdf}>
        Export to PDF
      </button>

      <div className="pdf-body" ref={bodyRef}>
        {props.children}
      </div>
    </div>
  );
};
