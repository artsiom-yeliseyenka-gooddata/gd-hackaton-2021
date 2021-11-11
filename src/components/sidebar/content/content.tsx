// (C) 2021 GoodData Corporation
import { FC, useMemo, useState } from "react";
import { useFormik } from "formik";
import classNames from "classnames/bind";
import stringify from "json-stable-stringify";

import { IProps } from "./interface";
import { GeneralTab } from "./tabs";
import styles from "./content.scss";

import { Header } from "~components/sidebar/header";

const cx = classNames.bind(styles);

export const Content: FC<IProps> = ({
    data: {
        theme: { content, meta },
    },
}) => {
    const { getFieldProps, handleSubmit, getFieldMeta, setFieldValue, values } = useFormik({
        initialValues: content,
        onSubmit: (formValues) => {
            const payload = { theme: { meta, content: formValues } };

            console.log(payload);
        },
    });

    const [menuValue, setMenuValue] = useState("general");

    const updateValue = (val) => setMenuValue(val);

    const renderList = useMemo(() => {
        switch (menuValue) {
            case "general":
                return (
                    <GeneralTab
                        getFieldMeta={getFieldMeta}
                        getFieldProps={getFieldProps}
                        setFieldValue={setFieldValue}
                    />
                );
            case "left":
                return "left";
            case "back":
                return "back";
            case "insight":
                return "insight";
            default:
                return "";
        }
    }, [menuValue, stringify(values)]);

    return (
        <form onSubmit={handleSubmit} noValidate className={cx("content")}>
            <Header updateValue={updateValue} />
            {renderList}
        </form>
    );
};
