import React from "react";
import Card1 from "../Card1";
import '../css/Props.css';
import PIECHART1 from "../Charts/Piechart1";

const Service = () =>{
    return(
        <>
            <div className="box">
                <div className="chart-container">
                    <Card1 />
                </div>
                <PIECHART1 />
            </div>

            
        </>
    )
}

export default Service;