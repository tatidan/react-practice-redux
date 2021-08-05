import React, { Component } from "react";
import { LanguageConsumer } from "../hoc/languageHoc";

const contextLangHoc = (WrappedComponent) => {
  return class ContextLangHoc extends Component {
    state = {};
    render() {
      return (
        <LanguageConsumer>
          {(value) => <WrappedComponent {...value} {...this.props} />}
        </LanguageConsumer>
      );
    }
  };
};

export default contextLangHoc;
