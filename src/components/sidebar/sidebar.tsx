// (C) 2021 GoodData Corporation
import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./sidebar.scss";
import { IProps } from "./interface";

const cx = classNames.bind(styles);

export const Sidebar: FC<IProps> = ({ classNames }) => {
    return <div className={cx("sidebar", classNames)}>sidebar</div>;
};
