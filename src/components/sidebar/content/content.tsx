// (C) 2021 GoodData Corporation
import { FC, useMemo, useState } from "react";
import { useFormik } from "formik";
import classNames from "classnames/bind";

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
    console.log(content);
    const { getFieldProps, handleSubmit, getFieldMeta } = useFormik({
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
                return <GeneralTab getFieldMeta={getFieldMeta} getFieldProps={getFieldProps} />;
            case "left":
                return "";
            case "back":
                return "";
            case "insight":
                return "";
            default:
                return "";
        }
    }, [menuValue]);

    return (
        <div className={cx("content")}>
            <Header updateValue={updateValue} />
            {renderList}
        </div>
    );
};
