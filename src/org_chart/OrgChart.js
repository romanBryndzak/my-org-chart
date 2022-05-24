// import React, {useLayoutEffect, useRef} from "react";
// import * as d3 from "d3";
//
// import {OrgChart} from 'd3-org-chart';
// import * as jspdf from "jspdf";
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import "../style.css";
//
//
// export const OrgChartComponent = (props) => {
//     const d3Container = useRef(null);
//     let chart = null;
//     let compact = 0;
//
//     function downloadPdf() {
//         chart.exportImg({
//             save: false,
//             onLoad: (base64) => {
//                 let pdf = new jspdf.jsPDF();
//                 let img = new Image();
//                 img.src = base64;
//                 img.onload = function () {
//                     pdf.addImage(
//                         img,
//                         'JPEG',
//                         5,
//                         5,
//                         595 / 3,
//                         ((img.height / img.width) * 595) / 3
//                     );
//                     pdf.save('chart.pdf');
//                 };
//             },
//         });
//     }
//
//
// // We need to manipulate DOM
//     useLayoutEffect(() => {
//         if (props.data && d3Container.current) {
//             if (!chart) {
//                 chart = new OrgChart();
//             }
//             chart
//                 .container(d3Container.current)
//                 .data(props.data)
//                 .svgWidth(500)
//                 .initialZoom(0.6)
//                 .backgroundColor("rgb(224,233,223)")
//                 .svgHeight(window.innerHeight - 10)
//                 .nodeHeight((d) => 160)
//                 .nodeWidth((d) => {
//                     // if (d.depth == 0) return 400;
//                     return 330;
//                 })
//                 .childrenMargin((d) => 90)
//                 .compactMarginBetween((d) => 65)
//                 .compactMarginPair((d) => 100)
//                 .neightbourMargin((a, b) => 50)
//                 .siblingsMargin((d) => 100)
//                 .buttonContent(({node, state}) => {
//                     let number1 = node.data._directSubordinates;
//                     return (
//                     `<div style="color:#000b0e;border-radius:5px;padding:3px;font-size:10px;margin:auto auto;
//                             background-color:#ffffff;border: 1px solid #000b0e">${node.data._directSubordinates}
//                              </div>`
//
//                         // <div className="buttonContent">
//                         // <span className="spanButtonContent">
//                         //     {node.children
//                         //     ? <KeyboardArrowUpIcon/>
//                         //     : <KeyboardArrowDownIcon/>
//                         // }
//                         // </span>
//                         //     {number1}
//                         // </div>
//
//                     )})
//
//
//                 .linkUpdate(function (d, i, arr) {
//                     d3.select(this)
//                         .attr('stroke', (d) =>
//                             d.data._upToTheRootHighlighted ? '#14760D' : '#000b0e'
//                         )
//                         .attr('stroke-width', (d) =>
//                             d.data._upToTheRootHighlighted ? 15 : 1
//                         );
//
//                     if (d.data._upToTheRootHighlighted) {
//                         d3.select(this).raise();
//                     }
//                 })
//
//
//                 .nodeContent(function (d) {
//                     return `
//                          <div style="font-family: 'Inter'; background-color:white;sans-serif; position:absolute;
//                          margin-top:-1px; margin-left:-1px;width:${d.width}px; color: #000b0e;
//                          height:${d.height}px;border-radius:5px;border: 2px solid rgba(243,163,102,0.87)">
//
//                              <div class="pie-chart-wrapper" style="margin-top:5px;width:320px;height:300px">
//                              <img src=" ${d.data.imageUrl}" style="position:absolute;margin-top:16px;margin-left:-150px;border-radius:25%;width:120px;height:120px;"  alt="ava"/>
//                              </div>
//
//                             <div style="color:#000b0e;position:absolute;right:15px;top:-20px;">
//                               <div style="font-size:22px;color:#000b0e;margin-top:32px"> ${d.data.name} </div>
//                               <div style="font-size:16px;"> ${d.data.positionName || ''} </div>
//                               <div style="font-size:16px;"> ${d.data.nodeId || ''} </div>
//                               <div style="font-size:14px;"> ${d.data.office || ''} </div>
//                               ${d.depth === 0 ? `<br/>
//                               <div style="max-width:150px;font-size:10px;">
//                                 A corporate history of Ian is a chronological.  <br>
//                                 </div>`
//                         : ''}
//                             </div>
//
//
//
//
//                           </div>`;
//                 })
//
//
//                 .nodeUpdate(function (d, i, arr) {})
//                 //     d3.select(this)
//                 //         .select('.node-rect')
//                 //         .attr('stroke', (d) =>
//                 //             d.data._highlighted || d.data._upToTheRootHighlighted
//                 //                 ? '#14760D'
//                 //                 : 'none'
//                 //         )
//                 //         .attr(
//                 //             'stroke-width',
//                 //             d.data._highlighted || d.data._upToTheRootHighlighted ? 40 : 1
//                 //         );
//                 //     const pieChartWrapperNode = d3
//                 //         .select(this)
//                 //         .select('.pie-chart-wrapper')
//                 //         .node();
//                 //     const val = (d.data.name.length * 5) % 100; // Dummy calc
//                 //     // General pie chart invokation code
//                 //     new PieChart()
//                 //         .data([
//                 //             {key: 'plan', color: '#6EC2EA', value: val},
//                 //             {key: 'exec', color: '#0D5AAF', value: 100 - val},
//                 //         ])
//                 //         .container(pieChartWrapperNode)
//                 //         .svgHeight(200)
//                 //         .svgWidth(320)
//                 //         .marginTop(40)
//                 //         .image(d.data.imageUrl)
//                 //         .backCircleColor('#1F72A7')
//                 //         .defaultFont('Inter')
//                 //         .render();
//                 // })
//                 .render();
//
//             //background-color
//
//             //  const url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QMaAyMA1SdmlAAAAVRJREFUeNrt26FOw2AUhuFTElzrETNLMNPtJVRVVFbtlnYXKGQFqldANo3EoLDUITazzCxBTNBk53lv4M+XJ/ndKZ52L9uft9eP+Oeqbtgs8O7+cbWO36/PiIgmwd4ojsdIU9n2l7XzNBYZNj9Eos6oTRbcdMAZAwxYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmABBizAAqwFgZ/fv+slHl7q3aobNpn2proujIgo276ep/HgixZgARZgARZgAQYswAIswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7D+AHZdeN97XRf6ogVYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABFmDAAizAAizAAqxrYNeF973XdaEvWoAFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswAIswAKsW0p1m1S2/WXtPI1Fhs0nxU1Jj2yxm2sAAAAASUVORK5CYII=`;
//             //  const replaced = url.replace(/(\r\n|\n|\r)/gm);
//             // d3.select('.svg-chart-container')
//             //     .style(
//             //         'background',
//             //         'radial-gradient(circle at center, #04192B 0, #000B0E 100%) url("https://raw.githubusercontent.com/bumbeishvili/coronavirus.davidb.dev/master/glow.png")'
//             //     )
//             //     .style(
//             //         'background-image',
//             //         `url(${replaced}), radial-gradient(circle at center, #04192B 0, #000B0E 100%)`
//             //     );
//         }
//     }, [props.data, d3Container.current]);
//
//     return (
//         <div>
//             <div ref={d3Container}/>
//
//             <div className="action-buttons">
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.setExpanded("2").render()*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-chevron-down"></i> Expand*/}
//                 {/*</button>*/}
//                 {/*<br/>*/}
//
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.setExpanded("O-6164",false).render()*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-chevron-up"></i> Collapse*/}
//                 {/*</button*/}
//                 {/*>*/}
//                 {/*<br/>*/}
//
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.addNode({*/}
//                 {/*        imageUrl: "https:\/\/raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",*/}
//                 {/*        id: "root child",*/}
//                 {/*        parentId: "4",*/}
//                 {/*        // parentId: `${parentId}`,*/}
//                 {/*        name: "test",*/}
//                 {/*        progress: [25, 20, 15, 10]*/}
//                 {/*    })*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-folder-plus"></i> Add Node*/}
//                 {/*</button>*/}
//                 {/*<br/>*/}
//
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.removeNode("3")*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-user-times"></i> remove*/}
//                 {/*</button*/}
//                 {/*>*/}
//                 {/*<br/>*/}
//
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.fit()*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-sync"></i> fit*/}
//                 {/*</button>*/}
//                 {/*<br/>*/}
//
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.layout(["right","bottom","left","top"][index++%4]).render().fit()*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-retweet"></i> swap*/}
//                 {/*</button>*/}
//                 {/*<br/>*/}
//
//                 <button onClick={() => {
//                     chart.compact(!!(compact++ % 2)).render().fit()
//                 }}
//                         className="btn btn-action-button"
//                 >
//                     <i className="fas fa-sitemap"></i> compact
//                 </button>
//                 <br/>
//
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.setActiveNodeCentered(!!(actNdCent++%2)).render()                    }}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-border-none"></i> center Active*/}
//                 {/*</button>*/}
//                 {/*<br/>*/}
//
//                 <button onClick={() => {
//                     chart.setCentered("1").render()
//                 }}
//                         className="btn btn-action-button "
//                 >
//                     <i className="fas fa-compress-arrows-alt"></i> center
//                 </button>
//                 <br/>
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.setHighlighted("O-6162").render()*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-highlighter"></i> mark*/}
//                 {/*</button*/}
//                 {/*>*/}
//                 {/*<br/>*/}
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.setUpToTheRootHighlighted("O-6162").render().fit()*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-route"></i> mark root*/}
//                 {/*</button>*/}
//                 {/*<br/>*/}
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.clearHighlighting()*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-eraser"></i> clear mark*/}
//                 {/*</button>*/}
//                 {/*<br/>*/}
//                 {/*<button onClick={() => {*/}
//                 {/*    chart.fullscreen('body')*/}
//                 {/*}}*/}
//                 {/*        className="btn btn-action-button waves-effect waves-light"*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-expand"></i> fullscreen*/}
//                 {/*</button*/}
//                 {/*>*/}
//                 {/*<br/>*/}
//
//                 <button onClick={() => {
//                     chart.exportImg()
//                 }}
//                         className="btn btn-action-button waves-effect waves-light"
//                 >
//                     export img
//                 </button>
//                 <br/>
//                 <button onClick={() => {
//                     downloadPdf()
//                 }}
//                         className="btn btn-action-button waves-effect waves-light">
//                     export pdf
//                 </button>
//                 <br/>
//                 <button onClick={() => {
//                     chart.zoomOut()
//                 }}
//                         className="btn btn-action-button waves-effect waves-light"
//                 >
//                     <i className="fas fa-minus"></i> zoom out
//                 </button
//                 >
//                 <br/>
//                 <button onClick={() => {
//                     chart.zoomIn()
//                 }}
//                         className="btn btn-action-button waves-effect waves-light"
//                 >
//                     <i className="fas fa-plus"></i> zoom in
//                 </button>
//                 <br/>
//             </div>
//         </div>
//     );
// };
//
//
//
//
