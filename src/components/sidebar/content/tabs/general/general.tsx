// (C) 2021 GoodData Corporation
import { FC } from "react";
import classNames from "classnames/bind";

import { ITabProps } from "../interface";

import styles from "./general.scss";

import { ColorPicker } from "~components/colorPicker";

const cx = classNames.bind(styles);

const FIELDS = {
    PRIMARY_COLOR: "palette.primary.base",
};

export const GeneralTab: FC<ITabProps> = ({ getFieldMeta, getFieldProps, setFieldValue }) => {
    return (
        <div className={cx("general-tab")}>
            <ColorPicker
                label="Primary"
                {...getFieldProps(FIELDS.PRIMARY_COLOR)}
                {...getFieldMeta(FIELDS.PRIMARY_COLOR)}
                onChange={(value) => {
                    console.log(value);
                    setFieldValue(FIELDS.PRIMARY_COLOR, value);
                }}
            />
        </div>
    );
};
