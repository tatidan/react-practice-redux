import React, { Component, createContext } from "react";
import languages from "../languages/languages";

const { Consumer: LangConsumer, Provider: LanguageProvider } = createContext();
export const LanguageConsumer = LangConsumer;

const languageHoc = (WrappedComponent) => {
  return class LanguageHoc extends Component {
    state = {
      language: "english",
    };

    changeLanguage = (e) => {
      this.setState({ language: e.target.value });
    };

    render() {
      const { language } = this.state;

      return (
        <>
          <LanguageProvider
            value={{
              language: languages[language],
              list: languages.list,
              changeLanguage: this.changeLanguage,
            }}
          >
            <WrappedComponent {...this.props} />

            {this.props.children}
          </LanguageProvider>
        </>
      );
    }
  };
};

export default languageHoc;
