// (C) 2021 GoodData Corporation
import { FC } from "react";
import { HashRouter } from "react-router-dom";

import { Router } from "~components/router";
import { Layout } from "~components/layout";

export const App: FC = () => {
    return (
        <HashRouter>
            <Layout>
                <Router />
            </Layout>
        </HashRouter>
    );
};
