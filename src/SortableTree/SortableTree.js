import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PersonIcon from '@material-ui/icons/Person';


const maps = [
    {
        nodeId: "1", labelText: "MONOLITH Iberica, Lda", labelIcon: "Apartment",
        BusinessCenter: [
            {
                nodeId: "5", labelText: "Categories for you", labelIcon: "BusinessCenter",
                Person: [
                    {nodeId: "8", labelText: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "9", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "10", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "11", labelText: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "6", labelText: "Categories you", labelIcon: "BusinessCenter",
                Person: [
                    {nodeId: "8", labelText: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "9", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "10", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "11", labelText: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "7", labelText: "First bag you", labelIcon: "BusinessCenter",
                Person: [
                    {nodeId: "20", labelText: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "21", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "22", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "23", labelText: "Mary", labelIcon: "Person"},
                ]
            },
            {
                nodeId: "8", labelText: "for you", labelIcon: "Center",
                Person: [
                    {nodeId: "24", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "25", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "26", labelText: "Mary", labelIcon: "Person"},
                ]
            },
        ],
    },
    {nodeId: "2", labelText: "MONOLITH, Lda", labelIcon: "Apartment",
        BusinessCenter: [
            {
                nodeId: "27", labelText: "Categories ", labelIcon: "BusinessCenter",
                Person: [
                    {nodeId: "28", labelText: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "29", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "30", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "31", labelText: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "32", labelText: "Categories you", labelIcon: "BusinessCenter",
                Person: [
                    {nodeId: "33", labelText: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "34", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "35", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "36", labelText: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "37", labelText: "First bag you", labelIcon: "BusinessCenter",
                Person: [
                    {nodeId: "38", labelText: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "39", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "40", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "41", labelText: "Mary", labelIcon: "Person"},
                ]
            },

        ],
    },
    {nodeId: "3", labelText: "MONOLITH, ", labelIcon: "Apartment"},
    {nodeId: "4", labelText: "MONOLITH, L", labelIcon: "Apartment",
        BusinessCenter: [
            {
                nodeId: "27", labelText: "Categories ", labelIcon: "BusinessCenter",
                Person: [
                    {nodeId: "28", labelText: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "29", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "30", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "31", labelText: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "41", labelText: "Categories you", labelIcon: "BusinessCenter",
                Person: [
                    {nodeId: "42", labelText: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "43", labelText: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "44", labelText: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "45", labelText: "Mary", labelIcon: "Person"},
                ]
            },
        ],
    }
]


const useTreeItemStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        '&:hover > $content': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:focus > $content, &$selected > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        },
        '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
            backgroundColor: 'transparent',
        },
    },
    content: {
        width: "inherit",
        color: theme.palette.text.secondary,
        paddingRight: theme.spacing(0),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    group: {
        marginLeft: 9,
        '& $content': {
            paddingLeft: theme.spacing(1),
        },
    },

    expanded: {},
    selected: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
        width: "inherit"
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
        textAlign: "start"
    },
}));

//
// function TreeItem(props) {
//     if (props.data.length > 0) {
//         return (
//             props.data.map((i) =>
//                 <div key={i.nodeId}>
//                     <StyledTreeItem labelTex={i.labelText}/>
//                 </div>
//             )
//         )
//     }
// }


function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const {labelText, nodeId, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other} = props;

    return (
        <TreeItem
            nodeId={nodeId}
            onClick={event => {
            }}
            label={
                <div className={classes.labelRoot}>
                    <LabelIcon color="inherit" className={classes.labelIcon}/>
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </div>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}

// StyledTreeItem.propTypes = {
//     bgColor: PropTypes.string,
//     color: PropTypes.string,
//     labelIcon: PropTypes.elementType.isRequired,
//     labelInfo: PropTypes.string,
//     labelText: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles({
//     root: {
//         height: 264,
//         flexGrow: 1,
//         maxWidth: 400,
//     },
// });

export default function SortableTree() {
    // const classes = useStyles();

    let company = []
    return (
        <TreeView
            // className={classes.root}
            defaultExpanded={['4']}
            defaultCollapseIcon={<ArrowDropDownIcon/>}
            defaultExpandIcon={<ArrowRightIcon/>}
            defaultEndIcon={<div style={{width: 24}}/>}
        >

            <StyledTreeItem key={"0"} nodeId={"0"} labelText={"Grouping"} style={{color: "white"}}
                            labelIcon={ApartmentIcon}>
                {maps.map(i => {
                    return <StyledTreeItem key={i.nodeId} nodeId={i.nodeId} labelText={i.labelText}
                                           labelIcon={ApartmentIcon}>
                        {i?.BusinessCenter?.map(j => {
                            return <StyledTreeItem key={j.nodeId} nodeId={j.nodeId} labelText={j.labelText}
                                                   labelIcon={BusinessCenterIcon}>
                                {j?.Person?.map(y => {
                                    return <StyledTreeItem key={y.nodeId} nodeId={y.nodeId} labelText={y.labelText}
                                                           labelIcon={PersonIcon}/>
                                })}
                            </StyledTreeItem>
                        })}
                    </StyledTreeItem>
                })}
            </StyledTreeItem>

            {/*console.log(i[0].id)*/}
            {/*let item1 = i[1]*/}
            {/*console.log(item1)*/}


            {/*<StyledTreeItem nodeId="0" labelText="Grouping" style={{color: "white"}} labelIcon={ApartmentIcon}>*/}
            {/*    <StyledTreeItem nodeId="1" labelText=" MONOLITH Iberica, Lda" labelIcon={ApartmentIcon}>*/}
            {/*        <StyledTreeItem nodeId="2" labelText="Categories for you" labelIcon={BusinessCenterIcon}>*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="7"*/}
            {/*                labelText="Piter Ben"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#1a73e8"*/}
            {/*                bgColor="#e8f0fe"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="8"*/}
            {/*                labelText="Lusi Ben"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                // labelInfo="2,294"*/}
            {/*                color="#e3742f"*/}
            {/*                bgColor="#fcefe3"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="9"*/}
            {/*                labelText="Ivanna Babiy"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                // labelInfo="3,566"*/}
            {/*                color="#a250f5"*/}
            {/*                bgColor="#f3e8fd"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="10"*/}
            {/*                labelText="Mary"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#3c8039"*/}
            {/*                bgColor="#e6f4ea"*/}
            {/*            />*/}
            {/*        </StyledTreeItem>*/}
            {/*        <StyledTreeItem nodeId="3" labelText="Categories for you" labelIcon={BusinessCenterIcon}>*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="11"*/}
            {/*                labelText="Heilis"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#1a73e8"*/}
            {/*                bgColor="#e8f0fe"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="12"*/}
            {/*                labelText="Dates Young"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#e3742f"*/}
            {/*                bgColor="#fcefe3"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="13"*/}
            {/*                labelText="Kas Forum"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#a250f5"*/}
            {/*                bgColor="#f3e8fd"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="14"*/}
            {/*                labelText="Vlad Pions"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#3c8039"*/}
            {/*                bgColor="#e6f4ea"*/}
            {/*            />*/}
            {/*        </StyledTreeItem>*/}
            {/*        <StyledTreeItem nodeId="4" labelText="Categories for you" labelIcon={BusinessCenterIcon}>*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="15"*/}
            {/*                labelText="Piter Ben"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#1a73e8"*/}
            {/*                bgColor="#e8f0fe"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="16"*/}
            {/*                labelText="Lusi Ben"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#e3742f"*/}
            {/*                bgColor="#fcefe3"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="17"*/}
            {/*                labelText="Ivanna Babiy"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#a250f5"*/}
            {/*                bgColor="#f3e8fd"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="18"*/}
            {/*                labelText="Mary"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#3c8039"*/}
            {/*                bgColor="#e6f4ea"*/}
            {/*            />*/}
            {/*        </StyledTreeItem>*/}
            {/*        <StyledTreeItem nodeId="5" labelText="Trash group" labelIcon={BusinessCenterIcon}/>*/}
            {/*        <StyledTreeItem nodeId="6" labelText="History company" labelIcon={BusinessCenterIcon}>*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="19"*/}
            {/*                labelText="Luis Moralis"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#e3742f"*/}
            {/*                bgColor="#fcefe3"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="20"*/}
            {/*                labelText="Roman Cheh"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#a250f5"*/}
            {/*                bgColor="#f3e8fd"*/}
            {/*            />*/}
            {/*            <StyledTreeItem*/}
            {/*                nodeId="21"*/}
            {/*                labelText="Peter Bulich"*/}
            {/*                labelIcon={PersonIcon}*/}
            {/*                color="#3c8039"*/}
            {/*                bgColor="#e6f4ea"*/}
            {/*            />*/}
            {/*        </StyledTreeItem>*/}
            {/*    </StyledTreeItem>*/}
            {/*</StyledTreeItem>*/}
        </TreeView>
    );
}
