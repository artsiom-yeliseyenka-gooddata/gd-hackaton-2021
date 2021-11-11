// (C) 2021 GoodData Corporation
import { FC, useMemo, useState } from "react";
import { useFormik } from "formik";
import classNames from "classnames/bind";
import stringify from "json-stable-stringify";
import { Button } from "@mui/material";

import { IProps } from "./interface";
import { GeneralTab } from "./tabs";
import styles from "./content.scss";

import { Header } from "~components/sidebar/header";
import { genericPostRequest } from "~utils/gdc";
import { Left } from "./tabs/left";
import { Back } from "./tabs/back";
import { Insight } from "./tabs/insight";

const cx = classNames.bind(styles);

export const Content: FC<IProps> = ({
    link,
    data: {
        theme: { content, meta },
    },
    onSubmit: reloadIframe,
}) => {
    const { getFieldProps, handleSubmit, getFieldMeta, setFieldValue, values } = useFormik({
        initialValues: content,
        onSubmit: (formValues) => {
            const payload = { theme: { meta, content: formValues } };
            genericPostRequest(`${link}?mode=edit`, payload);
            reloadIframe();
        },
    });
    console.log("🚀 ~ file: content.tsx ~ line 24 ~ data", values);

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
                return (
                    <Left
                        getFieldMeta={getFieldMeta}
                        getFieldProps={getFieldProps}
                        setFieldValue={setFieldValue}
                    />
                );
            case "back":
                return (
                    <Back
                        getFieldMeta={getFieldMeta}
                        getFieldProps={getFieldProps}
                        setFieldValue={setFieldValue}
                    />
                );
            case "insight":
                return (
                    <Insight
                        getFieldMeta={getFieldMeta}
                        getFieldProps={getFieldProps}
                        setFieldValue={setFieldValue}
                    />
                );
            default:
                return "";
        }
    }, [menuValue, stringify(values)]);

    return (
        <form onSubmit={handleSubmit} noValidate className={cx("content")}>
            <Header updateValue={updateValue} />
            {renderList}
            <Button type="submit">Submit</Button>
        </form>
    );
};
