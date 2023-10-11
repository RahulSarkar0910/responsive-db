import React from "react";
import PIECHART from "../Charts/Piechart";
import Card from "../Card";
import '../css/Props.css';

const Dashboard = () =>{
    return(
        <>
            <div className="box">
                <div className="chart-container">
                    <Card />
                </div>
                <PIECHART />
            </div>

            
        </>
    )
}

export default Dashboard;