// (C) 2021 GoodData Corporation
import { FC } from "react";
import { useFormik } from "formik";
import classNames from "classnames/bind";

import { IProps } from "./interface";
import { GeneralTab } from "./tabs";
import styles from "./content.scss";

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

    return (
        <div className={cx("content")}>
            <GeneralTab getFieldMeta={getFieldMeta} getFieldProps={getFieldProps} />
        </div>
    );
};
