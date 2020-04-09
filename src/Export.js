import React, { Component } from "react";
import Doc from "./DocService";
import PdfContainer from "./PdfContainer";
import Form from "./Form";

class Export extends Component {
  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((state) => {
      state[name] = value;
      return state;
    });
  };

  createPdf = (html) => Doc.createPdf(html);

  render() {
    return (
      <PdfContainer createPdf={this.createPdf}>
        <Form />
      </PdfContainer>
    );
  }
}

export default Export;
