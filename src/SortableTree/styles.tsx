import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    root: {
        margin: "6px 0 0 0",
        color: localStorage.theme === 'light'
            ? theme.palette.common.gray2
            : theme.palette.common.black2,
        '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
            backgroundColor: 'transparent',
            borderRadius: 5,
        },
    },
    content: {
        width: 'auto',
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    group: {
        '& $content': {
            margin: '0 0 0 -22',
        },
    },
    expanded: {},
    selected: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
        paddingLeft: 0,
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#f4f4f2",
        borderRadius: 5,
        padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
        marginLeft: 7,
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
        textAlign: 'start'
    },
    wrapper: {
        height: "100%",
        flexGrow: 1,
        maxWidth: 600,
        overflow: "auto",
    },
    defaultIcon: {
        borderRadius: 5,
        backgroundColor: "rgb(140 5 108 / 87%)",
        marginRight: "-25px",
        width: "15px",
        height: "31px"
    }
}));

export default useStyles;