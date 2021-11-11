// (C) 2021 GoodData Corporation
import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./collapsibleWrapper.scss";
import { IProps } from "./interface";

import { Text } from "~components/text";

const cx = classNames.bind(styles);

export const CollapsibleWrapper: FC<IProps> = ({ title }) => {
    return (
        <div className={cx("collapsible-wrapper")}>
            <Text preset="ParagraphRegular16">{title}</Text>
        </div>
    );
};
