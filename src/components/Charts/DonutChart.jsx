import data from '../../assets/Sample_Incident_Data.json';
import { Card, Title, DonutChart } from "@tremor/react";
import React, { useEffect, useState } from 'react';

const DONUTCHART = () =>{
    const [open, setOpen] = useState(0)
    const [close, setClose] = useState(0)

    useEffect(() => {
        const openCount = data.filter(item => item.Status === 'Open').length;
        const closedCount = data.filter(item => item.Status === 'Closed').length;
        setOpen(openCount);
        setClose(closedCount)
    }, []);


    return(
        <>
          <Card className="max-w-lg">
            <Title>Sales</Title>
            <DonutChart
            className="mt-6"
            data={[{name: 'Open',value: open},{name: 'Close',value: close}]}
            category="incidents"
            index="name"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
        </Card>

        </>
    );
}

export default DONUTCHART;