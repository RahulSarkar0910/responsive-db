import React from "react";
import '../css/Props.css'
import PIECHART from "../Charts/Piechart";
import BARCHART from "../Charts/Barchart";
import BARCHART1 from "../Charts/Barchart1";
import PIECHART1 from "../Charts/Piechart1";

const Graph = () =>{
    return(
        <>
            <div className="box">
            <u><h1 className="text-center">Incident Status</h1></u><br></br>
                <div className="chart-container">
                    <PIECHART />
                    <BARCHART />
                </div><br></br>
                <u><h1 className="text-center">Service Request Status</h1></u><br></br>
                <div className="chart-container">
                    <PIECHART1 />
                    <BARCHART1 />
                </div>
            </div>   
        </>
    )
}

export default Graph;