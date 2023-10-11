import { PieChart, Pie, Tooltip } from 'recharts';
import React, { useEffect, useState } from 'react';
import data from '../../assets/Sample_Incident_SR_Data.json';
import { Link } from 'react-router-dom';

const PIECHART1 = () =>{

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
        <>
            <div className="chart-1">
            <Link to="/table4">
                <PieChart width={400} height={400}>
                <Pie
                    dataKey= "value"
                    isAnimationActive={false}
                    data={[{name: 'Completed',value: completed,fill: '#57c0e8'},{name: 'In Progress',value: in_progress, fill: "red"},{name: 'Pending Approval',value: pending, fill: "green"}]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
                </PieChart>
                </Link>
                <sup>*</sup><span>Accurate Data representation</span>
                </div>


        </>
    )
}

export default PIECHART1;