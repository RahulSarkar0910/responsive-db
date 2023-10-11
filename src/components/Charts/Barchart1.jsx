import { Legend, BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip } from "recharts";
import data from '../../assets/Sample_Incident_SR_Data.json';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";

const BARCHART1 = () =>{
    const [completed, setCompleted] = useState(0)
    const [in_progress, setIn_progress] = useState(0)
    const [pending, setPending] = useState(0)
    const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];
    
    const [monthCounts, setMonthCounts] = useState({
        January: 0,
        February: 0,    
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      });


    useEffect(() => {
        

        const completedCount = data.filter(item => item.Status === 'Completed').length;
        const in_progressCount = data.filter(item => item.Status === 'In Progress').length;
        const pendingCount = data.filter(item => item.Status === 'Pending Approval').length;
        const monthCount = data.filter(item => {
            var momentDate = moment(item["Open Time"], 'DD-MM-YYYY HH:mm');
            const date = momentDate.toDate();
            const month = monthNames[date.getMonth()];
            monthCounts[month]++;
            // console.log(date,item["Open Time"],date.getMonth())
        })
        setCompleted(completedCount);
        setIn_progress(in_progressCount);
        setPending(pendingCount);
    }, []);
    
    console.log(monthCounts,monthCounts['January'])
    //console.log(data)
    return (
        <>
            <div className="chart-2" style={{'cursor' : 'pointer'}}>
            <Link to="/table3">
            <BarChart
                width={500}
                height={300}
                // data={[{name: 'Open',value: open},{name: 'Close',value: close}]}
                data={[{name: 'Jan',value: monthCounts['January']},{name: 'Feb',value: monthCounts['February']},{name: 'Mar',value: monthCounts['March']},
                {name: 'Apr',value: monthCounts['April']},{name: 'May',value: monthCounts['May']/2},{name: 'Jun',value: monthCounts['June']},
                {name: 'Jul',value: monthCounts['July']},{name: 'Aug',value: monthCounts['August']},{name: 'Sep',value: monthCounts['Septemper']},
                {name: 'Oct',value: monthCounts['October']},{name: 'Nov',value: monthCounts['November']},{name: 'Dec',value: monthCounts['December']}]}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
                >
                <XAxis dataKey='name' scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey='value' fill="#8884d8" background={{ fill: '#eee' }} />

            </BarChart> 
            </Link>
                </div>


        </>
    )
}

export default BARCHART1;