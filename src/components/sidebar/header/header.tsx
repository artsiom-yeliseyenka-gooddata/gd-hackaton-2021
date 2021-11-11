import { FC, useState, useEffect, MouseEvent } from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import classNames from "classnames/bind";

import { Icon } from "~components/icon";
import BackIcon from "~icons/Back.svg";
import GeneralIcon from "~icons/General.svg";
import InsightIcon from "~icons/Insight.svg";
import LeftIcon from "~icons/Left.svg";

import styles from "./header.scss";
const cx = classNames.bind(styles);

interface IHeader {
    updateValue: (val: string) => void;
}

export const Header: FC<IHeader> = ({ updateValue }) => {
    const [value, setValue] = useState("general");

    const handleChange = (event: MouseEvent<HTMLElement>, val: string) => {
        setValue(val);
    };

    const control = {
        value,
        onChange: handleChange,
        exclusive: true,
    };

    useEffect(() => {
        updateValue(value);
    }, [value]);

    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
            }}
        >
            <ToggleButtonGroup className={cx("header", classNames)} size="large" {...control}>
                <ToggleButton
                    className={cx("header-tab", classNames)}
                    value="general"
                    key="general"
                >
                    <Icon Icon={GeneralIcon} />
                </ToggleButton>
                ,
                <ToggleButton className={cx("header-tab", classNames)} value="left" key="left">
                    <Icon Icon={LeftIcon} />
                </ToggleButton>
                ,
                <ToggleButton className={cx("header-tab", classNames)} value="back" key="back">
                    <Icon Icon={BackIcon} />
                </ToggleButton>
                ,
                <ToggleButton
                    className={cx("header-tab", classNames)}
                    value="insight"
                    key="insight"
                >
                    <Icon Icon={InsightIcon} />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};
