// (C) 2021 GoodData Corporation
import React, { FC } from "react";
import classNames from "classnames/bind";

import styles from "./home.scss";

const cx = classNames.bind(styles);

export const Home: FC = () => {
    return <div className={cx("home")}>home</div>;
};
