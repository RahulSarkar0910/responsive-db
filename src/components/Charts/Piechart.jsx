import { PieChart, Pie, Tooltip } from 'recharts';
import React, { useEffect, useState } from 'react';
import data from '../../assets/Sample_Incident_Data.json';
import { Link } from 'react-router-dom';

const PIECHART = () =>{

    const [open, setOpen] = useState(0)
    const [close, setClose] = useState(0)

    useEffect(() => {
        const openCount = data.filter(item => item.Status === 'Open').length;
        const closedCount = data.filter(item => item.Status === 'Closed').length;
        setOpen(openCount);
        setClose(closedCount)
    }, []);


    return (
        <>
            <div className="chart-1">
            <Link to="/table2">
                <PieChart width={400} height={400}>
                <Pie
                    dataKey= "value"
                    isAnimationActive={false}
                    data={[{name: 'Open',value: open, fill: '#57c0e8'},{name: 'Close',value: close, fill: 'red'}]}
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

export default PIECHART;