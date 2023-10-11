import React, { useEffect, useState } from 'react';
import data from '../../assets/Sample_Incident_Data.json';
import '../css/table.css';

const Table2 = () => {
  // Filter data to include only items with 'Status' as 'Open'
  const openStatusData = data.filter((d) => d['Status'] === 'Open');
  const closedStatusData = data.filter((d) => d['Status'] === 'Closed');

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Open time</th>
            <th>Incident ID</th>
            <th>Status (Open)</th>
            <th>Title</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {openStatusData.map((d) => (
            <tr key={d['Incident ID']}>
              <td>{d['Open Time']}</td>
              <td>{d['Incident ID']}</td>
              <td>{d['Status']}</td>
              <td>{d['Title']}</td>
              <td>{d['Priority']}</td>
            </tr>
          ))}
        </tbody>
      </table><br></br><br></br>

      <table>
        <thead>
          <tr>
            <th>Open time</th>
            <th>Incident ID</th>
            <th>Status (Closed)</th>
            <th>Title</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {closedStatusData.map((d) => (
            <tr key={d['Incident ID']}>
              <td>{d['Open Time']}</td>
              <td>{d['Incident ID']}</td>
              <td>{d['Status']}</td>
              <td>{d['Title']}</td>
              <td>{d['Priority']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table2;
