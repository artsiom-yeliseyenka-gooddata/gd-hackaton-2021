// (C) 2021 GoodData Corporation
import { FC, useState, useMemo } from "react";
import classNames from "classnames/bind";

import styles from "./sidebar.scss";
import { IProps } from "./interface";
import { Header } from "./header";

const cx = classNames.bind(styles);

export const Sidebar: FC<IProps> = ({ classNames }) => {
    const [menuValue, setMenuValue] = useState("general");
    const [data, setData] = useState([]);

    const updateValue = (val) => setMenuValue(val);

    const renderList = useMemo(() => {
        // switch (menuValue) {
        //     case 'general':
        //         return;
        //     case 'left':
        //         return;
        //     case 'back':
        //         return;
        //     case 'insight':
        //         return;
        //     default:
        //         return;
        // }

        return <div />;
    }, [menuValue]);

    return (
        <div className={cx("sidebar", classNames)}>
            <div className={cx("sidebar-innerContainer", classNames)}>
                <Header updateValue={updateValue} />
                {renderList}
            </div>
        </div>
    );
};
