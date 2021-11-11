// (C) 2021 GoodData Corporation
import React, { useMemo } from "react";
import { List as MaterialList } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import classNames from "classnames/bind";

import styles from "./list.scss";

const cx = classNames.bind(styles);

type ListItem = { label: string; Component?: any; items?: { label: string; Component?: any }[] };

export const List = ({ data }: { data: (ListItem | ListItem[])[] }) => {
    const [openItem, setOpenItem] = React.useState("");

    const renderKeys = useMemo(() => {
        return data.map(({ label, Component, items }) => {
            const isItemOpened = openItem === label;
            return (
                <div key={label}>
                    <ListItemButton onClick={() => setOpenItem(isItemOpened ? "" : label)}>
                        <ListItemText className={cx("list-title")} primary={label} />
                        <ListItemIcon className={cx("list-icon")}>{Component}</ListItemIcon>
                    </ListItemButton>
                    {items?.length && (
                        <Collapse in={isItemOpened} timeout="auto" unmountOnExit>
                            <MaterialList component="div" disablePadding>
                                {items.map(({ label: subLabel, Component: SubComponent }) => (
                                    <ListItemButton key={subLabel} sx={{ pl: 4 }}>
                                        <ListItemText
                                            className={cx("list-title")}
                                            primary={subLabel}
                                        />
                                        <ListItemIcon className={cx("list-icon")}>
                                            {SubComponent}
                                        </ListItemIcon>
                                    </ListItemButton>
                                ))}
                            </MaterialList>
                        </Collapse>
                    )}
                </div>
            );
        });
    }, [data, openItem]);

    return (
        <MaterialList
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {renderKeys}
        </MaterialList>
    );
};
