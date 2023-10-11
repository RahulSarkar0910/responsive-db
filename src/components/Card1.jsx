import data from '../assets/Sample_Incident_SR_Data.json';
import React, { useEffect, useState } from 'react';
import '../components/css/card.css';
import BARCHART1 from './Charts/Barchart1';

function Card1() {

    const [completed, setCompleted] = useState(0)
    const [in_progress, setIn_progress] = useState(0)
    const [pending, setPending] = useState(0)

    useEffect(() => {
        const completedCount = data.filter(item => item.Status === 'Completed').length;
        const in_progressCount = data.filter(item => item.Status === 'In Progress').length;
        const pendingCount = data.filter(item => item.Status === 'Pending Approval').length;
        setCompleted(completedCount);
        setIn_progress(in_progressCount);
        setPending(pendingCount);
    }, []);



    return (
        <div className="grid-1">
            <div>
                <div className="grid-1-1">
                    <div className="card">
                            <p>{completed + in_progress + pending}</p>
                            <span>Total Requests Created</span>
                    </div>
                </div>
                <div className="grid-1-2">
                    <div className="card">
                        <p>{in_progress}</p>
                        <span>Requests In Progress</span>
                    </div>
                    <div className='card'>
                        <p>{completed}</p>
                        <span>Completed Requests</span>
                    </div>
                </div>
                <div className="grid-1-1">
                    <div className="card">
                            No. of Pending Requests till Date is<p>{pending}</p>
                            <span>{pending} pending requests</span>
                    </div>
                </div>
            </div>
            <div>
                <BARCHART1 />
            </div>

        </div>
       
    );
}

export default Card1;