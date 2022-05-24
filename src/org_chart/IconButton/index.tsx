import { IconButton as MDIconButton, IconButtonProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import React from 'react';

const CustomIconButton = withStyles((theme: any) => ({
    root: {
        flexGrow: 0,
        display: 'flex',
        cursor: "pointer",
        borderRadius: 8,
        padding: 6,
        marginRight: 4,
        "&:hover": {
            backgroundColor: localStorage.theme === "light"
                ? theme.palette.common.gray4
                : theme.palette.common.gray2,
        },
        backgroundColor: localStorage.theme === "light"
            ? theme.palette.common.white1
            : theme.palette.primary.light,
        color: `${localStorage.theme === "light"
            ? theme.palette.primary.main
            : theme.palette.common.gray4} !important`,
        borderColor: `${localStorage.theme === "light"
            ? theme.palette.primary.main
            : theme.palette.common.gray4} !important`,
        // '& svg': {
        //     color: `${localStorage.theme === "light"
        //         ? theme.palette.primary.main
        //         : theme.palette.common.gray4} !important`,
        //     '& path': {
        //         fill: `${localStorage.theme === "light"
        //             ? theme.palette.primary.main
        //             : theme.palette.common.gray4} !important`,
        //     }
        // }
    },
    disabled: {
        cursor: "not-allowed !important",
        backgroundColor: localStorage.theme === "light"
            ? `${theme.palette.common.white1} !important`
            : `${theme.palette.primary.light} !important`,
        color: localStorage.theme === "light"
            ? `${theme.palette.common.gray2} !important`
            : `${theme.palette.common.gray4} !important`,
        borderColor: localStorage.theme === "light"
            ? `${theme.palette.common.gray2} !important`
            : `${theme.palette.common.gray4} !important`,
        // '& svg': {
        //     color: localStorage.theme === "light"
        //         ? `${theme.palette.common.gray2} !important`
        //         : `${theme.palette.common.gray4} !important`,
        //     '& path': {
        //         fill: localStorage.theme === "light"
        //             ? `${theme.palette.common.gray2} !important`
        //             : `${theme.palette.common.gray4} !important`,
        //     }
        // }
    }
}))(MDIconButton);

const IconButton = ({ children, ...props }: IconButtonProps) => {

    return <CustomIconButton
        color="primary"
        {...props}
    >
        {children}
    </CustomIconButton>;
}

export default IconButton;