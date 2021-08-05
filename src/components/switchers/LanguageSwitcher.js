import React from "react";
import contextLangHoc from "../../hoc/contextLangHoc";

const LanguageSwitcher = ({ changeLanguage, language, list }) => {
  return (
    <>
      <select onChange={changeLanguage}>
        {list.map((lang) => (
          <option value={lang} key={lang}>
            {lang}
          </option>
        ))}
      </select>
    </>
  );
};

export default contextLangHoc(LanguageSwitcher);
