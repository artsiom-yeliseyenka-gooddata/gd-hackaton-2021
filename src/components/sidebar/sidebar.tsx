// (C) 2021 GoodData Corporation
import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./sidebar.scss";
import { IProps } from "./interface";
import { Content } from "./content";

import { useCurrentTheme } from "~utils/useCurrentTheme";
import { Preloader } from "~components/preloader";

const cx = classNames.bind(styles);

export const Sidebar: FC<IProps> = ({ classNames }) => {
    const { isLoading, error, data } = useCurrentTheme();

    return (
        <div className={cx("sidebar", classNames)}>
            {isLoading ? <Preloader /> : error ? "Failed to get data" : <Content data={data} />}
        </div>
    );
};
