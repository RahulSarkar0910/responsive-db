import {
    Legend,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Bar,
    Tooltip,
} from "recharts";
import data from "../../assets/Sample_Incident_Data.json";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const BARCHART = () => {
    const [open, setOpen] = useState(0);
    const [close, setClose] = useState(0);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
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

    console.log(data, monthCounts);

    useEffect(() => {
        const openCount = data.filter((item) => item.Status === "Open").length;
        const closedCount = data.filter(
            (item) => item.Status === "Closed"
        ).length;
        const updatedMonthCounts = { ...monthCounts }; // Create a copy of monthCounts

        data.forEach((item) => {
            var momentDate = moment(item["Open Time"], "DD-MM-YYYY HH:mm");
            const date = momentDate.toDate();
            const month = monthNames[date.getMonth()];
            updatedMonthCounts[month]++; // Update the copy
        });

        setMonthCounts(updatedMonthCounts);
        setOpen(openCount);
        setClose(closedCount);
    }, []);

    console.log(monthCounts, monthCounts["January"]);
    //console.log(data)
    return (
        <>
            <div className="chart-2" style={{ cursor: "pointer!" }}>
                <Link to="/table1">
                    <BarChart
                        width={500}
                        height={300}
                        // data={[{name: 'Open',value: open},{name: 'Close',value: close}]}
                        data={[
                            { name: "Jan", value: monthCounts["January"] },
                            { name: "Feb", value: monthCounts["February"] },
                            { name: "Mar", value: monthCounts["March"] },
                            { name: "Apr", value: monthCounts["April"] },
                            { name: "May", value: monthCounts["May"] / 2 },
                            { name: "Jun", value: monthCounts["June"] },
                            { name: "Jul", value: monthCounts["July"] },
                            { name: "Aug", value: monthCounts["August"] },
                            { name: "Sep", value: monthCounts["Septemper"] },
                            { name: "Oct", value: monthCounts["October"] },
                            { name: "Nov", value: monthCounts["November"] },
                            { name: "Dec", value: monthCounts["December"] },
                        ]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar
                            dataKey="value"
                            fill="#8884d8"
                            background={{ fill: "#eee" }}
                        />
                    </BarChart>
                </Link>
            </div>
        </>
    );
};

export default BARCHART;
