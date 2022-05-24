import React, {useState} from "react";
import {DockLayout} from "rc-dock";
import "rc-dock/dist/rc-dock.css";
import "./style.css";
// import "./styles.css";
import {OrgChartComponent} from "./org_chart/OrgChart";
import SortableTree from "./SortableTree/SortableTree";
import TreeSortable from "./SortableTree/TreeSortable";
import OrgChartTree from "./org_chart/OrgChartMine";

const progress = [{
    nodeId: "1",
    profileUrl: "http://example.com/employee/profile",
    parentNodeId: "",
    name: "Ivan",
    imageUrl: 'https://my.monolith-gruppe.com/data/profile/1/medium/b01b5426ee51a655ffef566b816c87df-1505163387.jpeg',
    positionName: "Management",
    progress: [
        20.98214383888474,
        22.1438201422954,
        14.654272894538568,
        21.02217379550735,
        15.507710805723763,
        11.57540723755426
    ],
    unit: {value: "la-la"},
    office: "CEO office",
    area: "corporate"
}]

const dataSortableTree = [
    {
        nodeId: "1", name: "MONOLITH Iberica, Lda", labelIcon: "Apartment", type: "company", color: "#61942d",
        departments: [
            {nodeId: "5", name: "Categories for you", labelIcon: "BusinessCenter", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "8", name: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "9", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "10", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "11", name: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "6", name: "Categories you", labelIcon: "BusinessCenter", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "8", name: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "9", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "10", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "11", name: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "7", name: "First bag you", labelIcon: "BusinessCenter", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "20", name: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "21", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "22", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "23", name: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "8", name: "for you", labelIcon: "Center", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "24", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "25", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "26", name: "Mary", labelIcon: "Person"},
                ]
            },
        ],
    },
    {nodeId: "2", name: "MONOLITH, Lda", labelIcon: "Apartment", type: "company", color: "#61942d",
        departments: [
            {nodeId: "27", name: "Categories ", labelIcon: "BusinessCenter", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "28", name: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "29", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "30", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "31", name: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "32", name: "Categories you", labelIcon: "BusinessCenter", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "33", name: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "34", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "35", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "36", name: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "37", name: "First bag you", labelIcon: "BusinessCenter", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "38", name: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "39", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "40", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "41", name: "Mary", labelIcon: "Person"},
                ]
            },

        ],
    },
    {nodeId: "3", name: "MONOLITH, ", labelIcon: "Apartment", type: "company", color: "#61942d",},
    {nodeId: "4", name: "MONOLITH, L", labelIcon: "Apartment", type: "company", color: "#61942d",
        departments: [
            {
                nodeId: "27", name: "Categories ", labelIcon: "BusinessCenter", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "28", name: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "29", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "30", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "31", name: "Mary", labelIcon: "Person"},
                ]
            },
            {nodeId: "41", name: "Categories you", labelIcon: "BusinessCenter", type: "department", color: "#61942d",
                Person: [
                    {nodeId: "42", name: "Piter Ben", labelIcon: "Person"},
                    {nodeId: "43", name: "Lusi Ben", labelIcon: "Person"},
                    {nodeId: "44", name: "Ivanna Babiy", labelIcon: "Person"},
                    {nodeId: "45", name: "Mary", labelIcon: "Person"},
                ]
            },
        ],
    }
]

const dataFlattened = [
    {
        nodeId: "1",
        parentNodeId: null,
        name: "Ivan",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "Management",
        mail: "mail",
        phone: "+3000",
        created_at: "04-12-2012",
        type: "User",
        color:"#108ee9",
        unit: {value: "la-la"},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "2",
        parentNodeId: "1",
        name: "YURIY",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "it personas",
        mail: "mail",
        phone: "+3000456789",
        created_at: "04-10-2012",
        type: "User",
        color:"#40c032",
        unit: {value: ""},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "3",
        parentNodeId: "1",
        name: "Petr",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "it personas",
        mail: "cbnghjkl",
        phone: "+3000098",
        created_at: "04-12-2012",
        type: "User",
        color:"rgba(245,113,9,0.87)",
        unit: {value: "la-la"},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "4",
        parentNodeId: "1",
        name: "Ivan",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "Management",
        mail: "mail",
        phone: "+3000098765",
        created_at: "04-12-2020",
        type: "User",
        color:"#075e9e",
        unit: {value: ""},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "5",
        parentNodeId: "2",
        name: "Ivan",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "Management",
        mail: "mail",
        phone: "+3000",
        created_at: "04-12-2012",
        type: "User",
        color:"#108ee9",
        unit: {value: ""},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "6",
        parentNodeId: "2",
        name: "Ivan",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "Management",
        mail: "mail",
        phone: "+3000",
        created_at: "04-12-2012",
        type: "User",
        color:"rgba(213,200,195,0.87)",
        unit: {value: ""},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "7",
        parentNodeId: "3",
        name: "Ivan",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "Management",
        mail: "mail",
        phone: "+3000",
        created_at: "04-12-2012",
        type: "User",
        color:"#e91051",
        unit: {value: ""},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "8",
        parentNodeId: "3",
        name: "Ivan",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "Management",
        mail: "mail",
        phone: "+3000",
        created_at: "04-12-2012",
        type: "User",
        color:"#10e922",
        unit: {value: ""},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "9",
        parentNodeId: "3",
        name: "Ivan",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "Management",
        mail: "mail",
        phone: "+3000",
        created_at: "04-12-2012",
        type: "User",
        color:"#ffcc00",
        unit: {value: ""},
        office: "CEO office",
        area: "corporate"
    }, {
        nodeId: "10",
        parentNodeId: "4",
        name: "Ivan",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QBf02flYN70IEHvoFmWyg74GtmpLQKJ-pw&usqp=CAU',
        positionName: "Management",
        mail: "mail",
        phone: "+3000",
        created_at: "04-12-2012",
        type: "User",
        color:"#e93110",
        unit: {value: ""},
        office: "CEO office",
        area: "corporate"
    },
]

const App = () => {



    let box = {
        dockbox: {
            mode: "horizontal",
            children: [
                {
                    mode: "vertical",
                    children: [{tabs: [{id: "t0", minWidth: 200}]}]
                },
                {
                    size: 50,
                    tabs: [{id: "t1"}]
                }
            ]
        }
    };
    // state = { layout: box };
    const [layout, setLayout] = useState(box)

    let tab = {
        title: "Company Tree",
        content: (
            <div className="body">
                <OrgChartTree data={dataFlattened}/>
            </div>
        )
    };

    const loadTab = (data) => {
        let {id} = data;
        switch (id) {
            case "t0":
                return {...tab, id};
            default:
                return {
                    id,
                    title: "Navigation",
                    content: <div className="navBar"><TreeSortable data={dataSortableTree}/></div>
                    // content: <div className="navBar"><SortableTree/></div>
                };
        }
    };

    const onLayoutChange = (newLayout, currentTabId) => {
        // control DockLayout from state
        console.log(currentTabId, newLayout);
        setLayout(newLayout);
    };

    return (
        <DockLayout
            layout={layout}
            loadTab={loadTab}
            onLayoutChange={onLayoutChange}
            dropMode="edge"
            style={{
                position: "absolute",
                left: 10,
                top: 10,
                right: 10,
                bottom: 10
            }}
        />
    );
}

export default App;


// const App = (props) => {
//     const [data, setData] = useState(null);
//     const [nodeId, setNodeId] = useState("O-1");
//     let addNodeChildFunc = null;
//
//     useEffect(() => {
//         d3.json(
//             "https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json"
//         ).then((data) => {
//             setData(data);});
//
//         },[nodeId])
//
//     function addNode() {
//         const node = {
//             nodeId: "ttt",
//             parentNodeId: nodeId,
//             width: 330,
//             height: 147,
//             borderWidth: 1,
//             borderRadius: 5,
//             nodeImage: {
//                 url:
//                     "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
//                 width: 100,
//                 height: 100,
//                 centerTopDistance: 0,
//                 centerLeftDistance: 0,
//                 cornerShape: "ROUNDED",
//                 shadow: true,
//                 borderWidth: 0
//             },
//             nodeIcon: {
//                 icon: "https://to.ly/1yZnX",
//                 size: 30
//             },
//             connectorLineColor: {
//                 red: 220,
//                 green: 189,
//                 blue: 207,
//                 alpha: 1
//             },
//             connectorLineWidth: 5,
//             dashArray: "",
//             expanded: false,
//             template: `<div>
//                   <div style="margin-left:80px;
//                               margin-top:10px;
//                               font-size:20px;
//                               font-weight:bold;
//                          ">Added Root Child </div>
//                  <div style="margin-left:80px;
//                               margin-top:3px;
//                               font-size:16px;
//                          ">Added position </div>
//
//                  <div style="margin-left:80px;
//                               margin-top:3px;
//                               font-size:14px;
//                          ">Added unit</div>
//
//                  <div style="margin-left:200px;
//                              margin-top:15px;
//                              font-size:13px;
//                              position:absolute;
//                              bottom:5px;
//                             ">
//                       <div>Added office</div>
//                       <div style="margin-top:5px">Added area</div>
//                  </div>
//               </div>`
//         };
//
//         addNodeChildFunc(node);
//     }
//
//     function onNodeClick(nodeId) {
//         console.log("d3", d3.event);
//         console.log("clicked " + nodeId);
//         setNodeId(nodeId)
//     }
//
//     useEffect(() => {
//         d3.json(
//             "https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json"
//         ).then((data) => {
//             setData(data);
//         });
//     }, [true]);
//     return (
//         <div>
//             Click node to trigger action in parent or &nbsp;
//             <button onClick={() => addNode()}>add node as root's child</button>
//             <OrgChartComponent
//                 setClick={(click) => (addNodeChildFunc = click)}
//                 onNodeClick={onNodeClick}
//                 data={data}
//             />
//         </div>
//     );
// };
