import React, { useMemo } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { List as MaterialList } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

export const List = ({ data }) => {
    const [openItem, setOpenItem] = React.useState("");

    const renderKeys = useMemo(() => {
        return Object.entries(data)
            .sort()
            .map(([key, value]) => {
                const isItemOpened = openItem === key;
                return (
                    <div key={key}>
                        <ListItemButton onClick={() => setOpenItem(isItemOpened ? "" : key)}>
                            <ListItemText primary={key} />
                            <ListItemIcon>{value?.base || ""}</ListItemIcon>
                        </ListItemButton>
                        {Object.keys(value)?.length > 1 && (
                            <Collapse in={isItemOpened} timeout="auto" unmountOnExit>
                                <MaterialList component="div" disablePadding>
                                    {Object.entries(value)?.map(([name, color]) => (
                                        <ListItemButton key={name} sx={{ pl: 4 }}>
                                            <ListItemText primary={name} />
                                            <ListItemIcon style={{ backgroundColor: color }}>
                                                {color}
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
