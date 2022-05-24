import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme: any) => ({
    ButtonsAction: {
        padding: "4px !important",
        '& span': {
            fontSize: 15
        },
        backgroundColor: localStorage.theme === "light"
            ? theme.palette.common.gray5
            : theme.palette.common.gray1,
        color: localStorage.theme === "light"
            ? theme.palette.common.inner
            : theme.palette.common.white1,
        "&:hover": {
            backgroundColor: localStorage.theme === "light"
                ? theme.palette.common.gray4
                : theme.palette.common.gray2,
        },
    },
    spanButtonContent: {
        fontSize: "9px",
    },
    btn: {
        textTransform: "uppercase",
        wordWrap: "break-word",
        whiteSpace: "normal",
        cursor: "pointer",
        display: "inline-block",
        fontWeight: 400,
        color: "#212529",
        textAlign: "center",
        verticalAlign: "middle",
        userSelect: "none",
        border: "1px solid transparent",
        padding: "0.375rem 0.75rem",
        lineHeight: 1.5,
        borderRadius: "0.25rem",
    },
    btnActionButton: {
        border: "none",
        textTransform: "lowercase",
        fontSize: "12px",
        borderRadius: "1px solid black !important",
        padding: "4px 5px !important",
        margin: 4,
        backgroundColor: localStorage.theme === "light"
            ? theme.palette.common.gray5
            : theme.palette.common.gray1,
        color: localStorage.theme === "light"
            ? theme.palette.common.inner
            : theme.palette.common.white1,
        "&:hover": {
            backgroundColor: localStorage.theme === "light"
                ? theme.palette.common.gray4
                : theme.palette.common.gray2,
        },
    },
    ActionButtons: {
        display: "flex",
        textAlign: "start",
        position: "absolute",
        top: 1,
        right: -1
    },
    '& svgChartContainer:before': {
        // content: '';
        // position: absolute;
        // left: 0;
        // right: 0;
        // top: 0;
        // bottom: 0;
        // background: radial-gradient(circle at center, #04192b 0, #000b0e 100%);
    },
    'button:hover': {
        color: "#000",
        backgroundColor: "#f8f8f8",
        borderColor: "#cbd3da",
        textDecoration: "none"
    },
    buttonContent: {
        color: " #000b0e",
        borderRadius: 5,
        padding: 3,
        fontSize: 10,
        margin: "auto",
        backgroundColor: "#ffffff",
        border: "1px solid #000b0e"
    },
}));

export default useStyles;