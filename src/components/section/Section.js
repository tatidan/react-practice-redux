import React from "react";
import contextLangHoc from "../../hoc/contextLangHoc";

const Section = ({ children, title }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default contextLangHoc(Section);
