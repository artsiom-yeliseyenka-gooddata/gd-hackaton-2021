// (C) 2021 GoodData Corporation
import { FC } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { Home, NotFound } from "~pages";
import { ROUTES } from "~constants";

export const Router: FC = () => {
    const { pathname } = useLocation();

    console.log(pathname);

    return (
        <Switch>
            <Route path={ROUTES.DEFAULT} exact component={() => <Redirect to={ROUTES.HOME} />} />
            <Route path={ROUTES.HOME} exact component={Home} />
            <Route component={NotFound} />
        </Switch>
    );
};
