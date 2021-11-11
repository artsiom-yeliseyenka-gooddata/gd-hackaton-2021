// (C) 2021 GoodData Corporation
import { FC } from "react";
import classNames from "classnames/bind";

import { ITabProps } from "../interface";

import styles from "./general.scss";

import { ColorPicker } from "~components/colorPicker";
import { List } from "~components/sidebar/list";

const cx = classNames.bind(styles);

const FIELDS = {
    PALETTE: "palette",
    PRIMARY_COLOR: "palette.primary.base",
    COMPLEMENTARY_COLOR_0: "palette.complementary.c0",
    COMPLEMENTARY_COLOR_1: "palette.complementary.c1",
    COMPLEMENTARY_COLOR_2: "palette.complementary.c2",
    COMPLEMENTARY_COLOR_3: "palette.complementary.c3",
    COMPLEMENTARY_COLOR_4: "palette.complementary.c4",
    COMPLEMENTARY_COLOR_5: "palette.complementary.c5",
    COMPLEMENTARY_COLOR_6: "palette.complementary.c6",
    COMPLEMENTARY_COLOR_7: "palette.complementary.c7",
    COMPLEMENTARY_COLOR_8: "palette.complementary.c8",
    COMPLEMENTARY_COLOR_9: "palette.complementary.c9",
};

export const GeneralTab: FC<ITabProps> = ({ getFieldMeta, getFieldProps, setFieldValue }) => {
    const listConfig = [
        {
            label: "Primary",
            Component: (
                <ColorPicker
                    label="Primary"
                    {...getFieldProps(FIELDS.PRIMARY_COLOR)}
                    {...getFieldMeta(FIELDS.PRIMARY_COLOR)}
                    onChange={(value) => {
                        console.log(value);
                        setFieldValue(FIELDS.PRIMARY_COLOR, value);
                    }}
                />
            ),
        },
        {
            label: "Complementary",
            items: [
                {
                    label: "C0",
                    Component: (
                        <ColorPicker
                            label="Primary"
                            {...getFieldProps(FIELDS.COMPLEMENTARY_COLOR_0)}
                            {...getFieldMeta(FIELDS.COMPLEMENTARY_COLOR_0)}
                            onChange={(value) => {
                                console.log(value);
                                setFieldValue(FIELDS.COMPLEMENTARY_COLOR_0, value);
                            }}
                        />
                    ),
                },
                {
                    label: "C1",
                    Component: (
                        <ColorPicker
                            label="Primary"
                            {...getFieldProps(FIELDS.COMPLEMENTARY_COLOR_1)}
                            {...getFieldMeta(FIELDS.COMPLEMENTARY_COLOR_1)}
                            onChange={(value) => {
                                console.log(value);
                                setFieldValue(FIELDS.COMPLEMENTARY_COLOR_1, value);
                            }}
                        />
                    ),
                },
            ],
        },
    ];

    return (
        <div className={cx("general-tab")}>
            <List data={listConfig} />
        </div>
    );
};
