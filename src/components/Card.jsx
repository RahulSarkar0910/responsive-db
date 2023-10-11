import data from '../assets/Sample_Incident_Data.json';
import React, { useEffect, useState } from 'react';
import '../components/css/card.css';
import BARCHART from "./Charts/Barchart";

function Card() {

    const [open, setOpen] = useState(0)
    const [close, setClose] = useState(0)

    useEffect(() => {
        const openCount = data.filter(item => item.Status === 'Open').length;
        const closedCount = data.filter(item => item.Status === 'Closed').length;
        setOpen(openCount);
        setClose(closedCount);
    }, []);



    return (
        <div className="grid-1">
            <div>
                <div className="grid-1-1">
                    <div className="card">
                            <p>{open + close}</p>
                            <span>Total Incidents Created</span>
                    </div>
                </div>
                <div className="grid-1-2">
                    <div className="card">
                        <p>{close}</p>
                        <span>Incidents Resolved</span>
                    </div>
                    <div className='card'>
                        <p>{open}</p>
                        <span>Unresolved Incidents</span>
                    </div>
                </div>
                <div className="grid-1-1">
                    <div className="card">
                            No. of Open Incidents till Date is<p>{open}</p>
                            <span>{open} breached SLA's</span>
                    </div>
                </div>
            </div>
            <div>
                <BARCHART />
            </div>

        </div>
       
    );
}

export default Card;