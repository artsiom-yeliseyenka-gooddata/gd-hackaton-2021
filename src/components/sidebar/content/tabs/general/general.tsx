// (C) 2021 GoodData Corporation
import { FC } from "react";
import classNames from "classnames/bind";

import { ITabProps } from "../interface";

import styles from "./general.scss";

import { ColorPicker } from "~components/colorPicker";
import { List } from "~components/sidebar/list";
import { Toggle } from "~components/toggle";
import { Input } from "~components/input";

const cx = classNames.bind(styles);

export const GeneralTab: FC<ITabProps> = ({ getFieldMeta, getFieldProps, setFieldValue }) => {
    const FIELDS = [
        {
            label: "Primary color",
            value: "palette.primary.base",
            component: "colorPicker",
        },
        {
            label: "Error color",
            value: "palette.error.base",
            component: "colorPicker",
        },
        {
            label: "Success color",
            value: "palette.success.base",
            component: "colorPicker",
        },
        {
            label: "Warning color",
            value: "palette.warning.base",
            component: "colorPicker",
        },
        {
            label: "Complementary colors",
            nestedItems: [
                {
                    label: "Main Components",
                    value: "palette.complementary.c0",
                    component: "colorPicker",
                },
                {
                    label: "Hover",
                    value: "palette.complementary.c1",
                    component: "colorPicker",
                },
                {
                    label: "Accent color",
                    value: "palette.complementary.c2",
                    component: "colorPicker",
                },
                {
                    label: "Borders",
                    value: "palette.complementary.c3",
                    component: "colorPicker",
                },
                {
                    label: "C4",
                    value: "palette.complementary.c4",
                    component: "colorPicker",
                },
                {
                    label: "C5",
                    value: "palette.complementary.c5",
                    component: "colorPicker",
                },
                {
                    label: "Highlight color",
                    value: "palette.complementary.c6",
                    component: "colorPicker",
                },
                {
                    label: "Labels",
                    value: "palette.complementary.c7",
                    component: "colorPicker",
                },
                {
                    label: "C8",
                    value: "palette.complementary.c8",
                    component: "colorPicker",
                },
                {
                    label: "C9",
                    value: "palette.complementary.c9",
                    component: "colorPicker",
                },
            ],
        },
        {
            label: "Buttons",
            nestedItems: [
                {
                    label: "Border thickness",
                    value: "button.borderRadius",
                    component: "input",
                },
                {
                    label: "Shadow",
                    value: "button.dropShadow",
                    component: "toggle",
                },
            ],
        },
        {
            label: "Tooltip Colors",
            nestedItems: [
                {
                    label: "Text color",
                    value: "tooltip.color",
                    component: "colorPicker",
                },
                {
                    label: "Background color",
                    value: "tooltip.backgroundColor",
                    component: "colorPicker",
                },
            ],
        },
        {
            label: "PopUp window",
            nestedItems: [
                {
                    label: "Title color",
                    value: "modal.title.color",
                    component: "colorPicker",
                },
                {
                    label: "Title line",
                    value: "modal.title.lineColor",
                    component: "colorPicker",
                },
                {
                    label: "Border color",
                    value: "modal.borderColor",
                    component: "colorPicker",
                },
                {
                    label: "Border radius",
                    value: "modal.borderRadius",
                    component: "input",
                },
                {
                    label: "Border width",
                    value: "modal.borderWidth",
                    component: "input",
                },
                {
                    label: "Drop shadow",
                    value: "modal.dropShadow",
                    component: "toggle",
                },
                {
                    label: "Outside background color",
                    value: "modal.outsideBackgroundColor",
                    component: "colorPicker",
                },
            ],
        },
    ];

    const renderComponent = ({ value, component, label, nestedItems }) => {
        if (nestedItems) {
        }
        switch (component) {
            case "colorPicker":
                return (
                    <ColorPicker
                        {...getFieldProps(value)}
                        {...getFieldMeta(value)}
                        onChange={(val) => setFieldValue(value, val)}
                    />
                );
            case "toggle":
                return (
                    <Toggle
                        label={label}
                        {...getFieldProps(value)}
                        {...getFieldMeta(value)}
                        onChange={(val) => setFieldValue(value, val)}
                    />
                );
            case "input":
                return (
                    <Input
                        {...getFieldProps(value)}
                        {...getFieldMeta(value)}
                        onChange={(val) => setFieldValue(value, val)}
                    />
                );
        }
    };

    const listConfig = FIELDS.map((field) =>
        field?.nestedItems
            ? {
                  label: field.label,
                  items: field.nestedItems.map((nestedItem) => ({
                      label: nestedItem.label,
                      Component: renderComponent(nestedItem),
                  })),
              }
            : {
                  label: field.label,
                  Component: renderComponent(field),
              },
    );

    return (
        <div className={cx("general-tab")}>
            <h6 className={cx("general-title")}>GENERAL STYLING</h6>
            <List data={listConfig} />
        </div>
    );
};
