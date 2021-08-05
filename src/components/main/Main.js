import React from "react";
import { Route, Switch } from "react-router-dom";
import contextLangHoc from "../../hoc/contextLangHoc";
import mainRoutes from "../../routes/mainRoutes";
import Section from "../section/Section";

const Main = ({ language }) => {
  return (
    <>
      <Switch>
        {mainRoutes.map(({ path, exact, name, component: MyComponent }) => (
          <Route
            path={path}
            exact={exact}
            key={path}
            render={(props) => (
              <Section title={language.navigation[name]}>
                <MyComponent {...props} />
              </Section>
            )}
          />
        ))}
      </Switch>
    </>
  );
};

export default contextLangHoc(Main);
