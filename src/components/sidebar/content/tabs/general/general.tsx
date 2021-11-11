// (C) 2021 GoodData Corporation
import { FC } from "react";
import classNames from "classnames/bind";

import { ITabProps } from "../interface";

import styles from "./general.scss";

const cx = classNames.bind(styles);

export const GeneralTab: FC<ITabProps> = ({ getFieldMeta, getFieldHelpers }) => {
    return <div className={cx("general-tab")}>general</div>;
};
