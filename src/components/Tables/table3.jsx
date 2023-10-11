import React, { useEffect, useState } from 'react';
import data from '../../assets/Sample_Incident_SR_Data.json';
import '../css/table.css';

const Table3 = () =>{

    
    
    console.log(data)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Open time</th>
                        <th>Request ID</th>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d)=>(
                        <tr>
                            <td>{d["Open Time"]}</td>
                            <td>{d["Request ID"]}</td>
                            <td>{d["Status"]}</td>
                            <td>{d["Title"]}</td>
                            <td>{d["Priority"]}</td>
                        </tr>
                ))}
                </tbody>
            </table>        


        </>
    )
}

export default Table3;

