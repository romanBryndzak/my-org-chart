import React, {memo, useLayoutEffect, useRef} from "react";
import {OrgChart} from 'd3-org-chart';
import * as jspdf from "jspdf";
import useStyles from './styles';
import IconButton from "./IconButton/index";
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SyncIcon from '@material-ui/icons/Sync';
import CropRotateIcon from '@material-ui/icons/CropRotate';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import RefreshIcon from '@material-ui/icons/Refresh';

const OrgChartTree = memo((props: any) => {

    const isResponsible = false;
    const classes = useStyles();

    const d3Container = useRef(null);
    let chart: any = null;
    let compact = 0;
    let index = 0;

    function downloadPdf() {
        chart.exportImg({
            save: false,
            onLoad: (base64: string) => {
                let pdf = new jspdf.jsPDF();
                let img = new Image();
                img.src = base64;
                img.onload = function () {
                    pdf.addImage(
                        img,
                        'JPEG',
                        5,
                        5,
                        595 / 3,
                        ((img.height / img.width) * 595) / 3
                    );
                    pdf.save('chart.pdf');
                };
            },
        });
    }

    // We need to manipulate DOM
    useLayoutEffect(() => {
        if (props.data && d3Container.current) {

            const iconPeoples = `<svg style=" fill: currentColor; width: 1em; height: 1em; display: inline-block;
                                      font-size: 1.4693877551020407rem; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                                      flex-shrink: 0; user-select: none;" focusable="false"
                                      viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"></path>
                                      <circle cx="9" cy="8" r="4" fill-rule="evenodd"></circle><path fill-rule="evenodd" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                                 </svg>`
            const iconBusinessCenter = `<svg style=" fill: currentColor; width: 1em; height: 1em; display: inline-block;
                                              font-size: 1.4693877551020407rem; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                                              flex-shrink: 0; user-select: none;" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                              <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path>
                                        </svg>`

            if (!chart) {
                chart = new OrgChart();
            }
            chart
                .container(d3Container.current)
                .data(props.data)
                .initialZoom(0.7)
                .backgroundColor('inherit')
                .svgHeight(window.innerHeight - 10)
                .nodeHeight((d: any) => 210)
                .nodeWidth((d: any) => {
                    return 500;
                })
                .childrenMargin((d: any) => 90)
                .compactMarginBetween((d: any) => 65)
                .compactMarginPair((d: any) => 100)
                .neightbourMargin((a: any, b: any) => 50)
                .siblingsMargin((d: any) => 100)
                .buttonContent(({node}: any) => {
                    return `<div style="color:#000b0e; border-radius:5px; padding:0 5px 0 5px; font-size:22px; margin:auto auto;
                                 background-color:rgba(213,200,195,0.87); text-align:center"> ${node.data._directSubordinates}
                            </div>`
                })

                .nodeContent(function (d: any) {

                    return `<div style="background-color:#f4f4f2; margin-top:-1px; margin-left:-1px;
                            width:${d.width}; color: #000b0e; height:200px; border-radius:10px 10px 0 0; display:flex; flex-direction:column;"> 
                                ${d.data?.type !== "department" && d.data?.type !== "company"
                        ?
                        `<div style="display:flex; flex-direction:column;">
                                        <div style="display:flex; flex-direction:row">
                                            <div  style=" margin:0 0 5px 0;">
                                                <img src=" ${d.data?.imageUrl}" style="border-radius:10px 0 0 4px; margin:0; width:180px; height:200px;" alt="ava"/>
                                            </div>
                                           
                                            <div style="color:#495564; padding:10px 0 0 15px; text-align:start; display:flex; flex-direction:column;">
                                                 <div style="font-size:22px; margin-bottom:3px; font-weight:700;">${d.data.name}</div>
                                                 <div style="font-size:18px; margin-bottom:18px;">${d.data?.positionName || 'positionName'}</div>          
                                                 <div style="color:#495564; font-size:15px; text-align:start;">     
                                                     <div style="display:flex; flex-direction:row; margin-bottom: 3px">
                                                           <div style="margin-right:15px; font-size:20px;">
                                                               ${iconPeoples}
                                                           </div>
                                                           <div style="padding-top:3px;">${d.data?.office}</div>
                                                     </div>
                                                     <div style="display:flex; flex-direction:row; margin-bottom: 3px">
                                                          <div style="margin: -3px 12px -3px -6px; font-size:18px;">
                                                               <svg style="enable-background:new 0 0 48 48; width: 2em; height: 2em; padding: 0"  viewBox="0 0 48 48" xml:space="preserve">
                                                               <style type="text/css">\t.st1{fill:none;stroke:#303030;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                                                                <g class="st0" id="Padding__x26__Artboard"/>
                                                                <g id="Icons">
                                                                    <g>
                                                                        <line class="st1" x1="31.355" x2="16.645" y1="14.55105" y2="14.55105"/>
                                                                        <path class="st1" d="M33.045,14.55105h1.4c1.24,0,2.25,1.01,2.25,2.26v16.41c0,1.25-1.01,2.26-2.25,2.26h-20.88    c-1.25,0-2.26-1.01-2.26-2.26v-16.41c0-1.25,1.01-2.26,2.26-2.26h1.39"/>
                                                                        <line class="st1" x1="36.695" x2="11.305" y1="19.43105" y2="19.43105"/>
                                                                            <g>
                                                                                <path class="st1" d="M15.80193,16.58717L15.80193,16.58717c-0.46333,0-0.84241-0.37908-0.84241-0.84241v-2.3834     c0-0.46332,0.37908-0.84241,0.84241-0.84241h0c0.46332,0,0.84241,0.37908,0.84241,0.84241v2.3834     C16.64434,16.20809,16.26526,16.58717,15.80193,16.58717z"/>
                                                                                <path class="st1" d="M32.19807,16.58717L32.19807,16.58717c-0.46333,0-0.84241-0.37908-0.84241-0.84241v-2.3834     c0-0.46332,0.37908-0.84241,0.84241-0.84241h0c0.46332,0,0.84241,0.37908,0.84241,0.84241v2.3834     C33.04048,16.20809,32.66139,16.58717,32.19807,16.58717z"/>
                                                                            </g>
                                                                            <g>
                                                                                <rect class="st1" height="1.9886" width="3.54719" x="15.88189" y="24.29007"/>
                                                                                <rect class="st1" height="1.9886" width="3.54719" x="22.30136" y="24.29007"/>
                                                                                <rect class="st1" height="1.9886" width="3.54719" x="22.30136" y="28.25252"/>
                                                                                <rect class="st1" height="1.9886" width="3.54719" x="28.57092" y="24.29007"/>
                                                                                <rect class="st1" height="1.9886" width="3.54719" x="28.57092" y="28.25252"/>
                                                                                <rect class="st1" height="1.9886" width="3.54719" x="15.97519" y="28.25252"/>
                                                                            </g>
                                                                        <line class="st1" x1="19.73182" x2="24.49272" y1="16.34431" y2="16.34431"/>
                                                                        <line class="st1" x1="25.84855" x2="27.04857" y1="16.34431" y2="16.34431"/>
                                                                    </g>
                                                                </g>
                                                          </svg>
                                                          </div> 
                                                          <div style="padding-top:7px;">${d.data?.created_at}</div>
                                                     </div>
                                                     <div style="display:flex; flex-direction:row; margin-bottom: 3px">
                                                           <div style="margin-right:15px; font-size:18px;">
                                                           <a href="tel:${d.data?.phone}">
                                                                <svg style=" fill: currentColor; width: 1em; height: 1em; display: inline-block;
                                                                      font-size: 1.4693877551020407rem; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                                                                      flex-shrink: 0; user-select: none;" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                                                                 </svg>
                                                           </a>
                                                           </div> 
                                                           <div style="padding-top:3px;">${d.data?.phone || 'phone'}</div>
                                                     </div>
                                                     <div style="display:flex; flex-direction:row; margin-bottom: 3px" onclick="window.open('mailto:?cc=${d.data?.mail}')">
                                                           <div style="margin-right:15px; font-size:18px;">
                                                               <svg  style=" fill: currentColor; width: 1em; height: 1em; display: inline-block;
                                                                      font-size: 1.4693877551020407rem; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                                                                      flex-shrink: 0; user-select: none;" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                                                               </svg>
                                                           </div> 
                                                           <div style="padding-top:3px;">${d.data?.mail || 'mail '}</div>
                                                     </div>
                                                 </div>
                                            </div>
                                        </div>
                                        <div>
                                            ${isResponsible
                            ?
                            `<div style="background-color:${d.data.color}; color: #fff; 
                                                width:${d.width}; margin-top:-35px; height:20px; border-radius: 0 0 10px 10px;">
                                                <p style="padding: 0 0 3px 8px;font-size:18px;">Responsible</p>
                                              </div>`
                            :
                            `<div style="background-color:${d.data.color}; color: #fff; margin-top:-12px;
                                                width:${d.width}; height:12px; border-radius: 0 0 10px 10px;"></div>`
                        }
                                        </div>
                                    </div>`
                        :
                        ` ${d.data?.type === "department"
                            ?
                            `<div style="background-color:#f4f4f2; position:absolute; padding-top: -25%; 
                                              width:${d.width}px; color:#000b0e; text-align:center; justify-content:center;
                                              height:${d.height}px; border-radius:5px; border-top:10px solid ${d.data.color}">                  
                                            <div style="font-size:23px; margin-top:15px; color:#000b0e; font-weight:600; padding-top:32px">${d.data.name}</div>
                                                ${d.data.type === "department" && typeof d.data.nodeId === "number"
                                ? `<div style="font-size:22px; font-weight:500; padding-top:26px; display:flex;
                                                    flex-direction:row; text-align:center; justify-content:center;">
                                                        ${iconPeoples}
                                                   <div style="margin-left: 7px">${d.data._directSubordinates}</div> 
                                                 </div>`
                                : ""
                            }     
                                        </div>`
                            :
                            `<div style="background-color:#f4f4f2; position:absolute;
                                              width:${d.width}px; color:#000b0e; text-align:center; justify-content:center;
                                              height:${d.height}px; border-radius:5px; border-top:10px solid rgba(246,139,56,0.87)" >
                                            <div style="font-size:25px; margin-top:15px; color:#000b0e; font-weight:400; 
                                                 text-decoration:underline; padding-top:15px">Company</div>                       
                                            <div style="font-size:27px; margin-top:15px; color:#000b0e; font-weight:600;">${d.data.name}</div>                       
                                        </div>`
                        }`
                    }
                             </div> `
                }).render();
        }
    }, [props.data, d3Container.current]);

    return (
        <div>
            <div ref={d3Container}/>
            <div className={classes.ActionButtons}>
                <IconButton
                    className={classes.ButtonsAction}
                    onClick={() => {
                        chart.setCentered("1").render()
                    }}
                    title="refresh"
                >
                    <RefreshIcon/>
                </IconButton>
                <IconButton
                    className={classes.ButtonsAction}
                    onClick={() => {
                        chart.compact(!!(compact++ % 2)).render().fit()
                    }}
                    title="compact"
                >
                    <AccountTreeIcon/>
                </IconButton>
                <IconButton
                    className={classes.ButtonsAction}
                    onClick={() => {
                        chart.layout(["right", "bottom", "left", "top"][index++ % 4]).render().fit()
                    }}
                    // title={props.t("niki.field.change_tree")}
                    title="change tree"
                >
                    <CropRotateIcon/>
                </IconButton>
                <IconButton
                    className={classes.ButtonsAction}
                    onClick={() => {
                        chart.fit()
                    }}
                    title="preparation for the screen"
                >
                    <SyncIcon/>
                </IconButton>
                <IconButton
                    className={classes.ButtonsAction}
                    onClick={() => {
                        chart.exportImg()
                    }}
                    title="download img"
                >
                    <SaveAltIcon/>
                </IconButton>
                <IconButton
                    className={classes.ButtonsAction}
                    onClick={() => {
                        downloadPdf()
                    }}
                     title="download pdf"
                >
                    <SaveAltIcon/>
                </IconButton>
                <IconButton
                    className={classes.ButtonsAction}
                    onClick={() => {
                        chart.zoomOut()
                    }}
                >
                    <ZoomOutIcon/>
                </IconButton>
                <IconButton
                    className={classes.ButtonsAction}
                    onClick={() => {
                        chart.zoomIn()
                    }}
                >
                    <ZoomInIcon/>
                </IconButton>
            </div>
        </div>
    );
});

export default OrgChartTree;

// ${node.data.type === "company" || node.data.type === "department" && typeof node.data.nodeId === "string"
//                        ? `${node.data.type === "company"
//                            ? `${iconBusinessCenter} ${node.data._directSubordinates}`
//                             : `${iconPeoples}${node.data._directSubordinates}`
//                         }`
// : ""
// }