import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, {TreeItemProps} from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import {SvgIconProps} from '@material-ui/core/SvgIcon';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import {useTheme} from "@material-ui/core";
import useStyles from "./styles";


function StyledTreeItem(props: StyledTreeItemProps) {

    const getEvent = (e: any, nodeId: string, type: string, name: string) => {
        props.change(nodeId.slice(0, 16), type, name);
    };

    // theme 
    const theme = useTheme();
    // styles
    const classes = useStyles({theme});

    const {labelText, type, nodeId, labelIcon: LabelIcon, color, bgColor, ...other} = props;

    // @ts-ignore
    return (
        <TreeItem
            nodeId={nodeId}
            label={
                <div className={classes.labelRoot}
                     onClick={(event) => {
                         getEvent(event, nodeId, type, labelText)
                     }}
                >
                    <LabelIcon color="inherit" className={classes.labelIcon}/>
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                </div>
            }
            style={{
                // '--tree-view-color': color,
                // '--tree-view-bg-color': bgColor,
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

declare module 'csstype' {
    interface Properties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}

type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon: React.ElementType<SvgIconProps>;
    labelText: string;
    type: string;
    change: (id: string, type: string, name: string) => {}
};

const SortableTree = (props: any) => {

    // theme 
    const theme = useTheme();
    // styles
    const classes = useStyles({theme});

    const data = props.data

    return (
        <TreeView
            className={classes.wrapper}
            defaultCollapseIcon={<div className={classes.defaultIcon}></div>}
            defaultExpandIcon={<div className={classes.defaultIcon}></div>}
        >
            {data?.map((company: any) => {
                return <StyledTreeItem key={company.nodeId} nodeId={company.nodeId + company.name}
                                       labelText={company.name}
                                       type={company.type} labelIcon={ApartmentIcon}
                                       change={props.change}>
                    {company?.departments?.map((department: any) => {
                        return <StyledTreeItem key={department.nodeId} nodeId={department.nodeId + department.name}
                                               change={props.change}
                                               type={department.type} labelText={department.name}
                                               labelIcon={BusinessCenterIcon}
                                               style={{
                                                   borderRadius: 5,
                                                   marginLeft: "22px",
                                                   borderLeft: ` 10px solid ${department.color}`
                                               }}
                        >
                        </StyledTreeItem>
                    })}
                </StyledTreeItem>
            })}
        </TreeView>
    )
}

export default SortableTree;