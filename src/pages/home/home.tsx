// (C) 2021 GoodData Corporation
import React, { FC } from "react";
import classNames from "classnames/bind";
import { DashboardView } from "@gooddata/sdk-ui-ext";

import styles from "./home.scss";

import { Sidebar } from "~components/sidebar";
import { DASHBOARD_ID } from "~constants";

const cx = classNames.bind(styles);

export const Home: FC = () => {
    return (
        <div className={cx("home")}>
            <Sidebar classNames={cx("sidebar")} />
            <div className={cx("dashboard")}>
                <DashboardView dashboard={DASHBOARD_ID} />
            </div>
        </div>
    );
};
