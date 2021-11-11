// (C) 2021 GoodData Corporation
import { FC } from "react";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

import { Sidebar } from "./sidebar";
import styles from "./layout.scss";

const cx = classNames.bind(styles);

export const Layout: FC = ({ children }) => {
    const { pathname } = useLocation();

    console.log(pathname);

    return (
        <div className={cx("layout")}>
            <Sidebar classNames={cx("sidebar")} />
            <div className={cx("content")}>{children}</div>
        </div>
    );
};
