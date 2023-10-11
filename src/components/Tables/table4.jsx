import React, { useEffect, useState } from 'react';
import data from '../../assets/Sample_Incident_SR_Data.json';
import '../css/table.css';

const Table4 = () => {
  // Filter data to include only items with 'Status' as 'Open'
  const completedStatusData = data.filter((d) => d['Status'] === 'Completed');
  const in_progressStatusData = data.filter((d) => d['Status'] === 'In Progress');
  const pendingStatusData = data.filter((d) => d['Status'] === 'Pending Approval');

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Open time</th>
            <th>Request ID</th>
            <th>Status (Completed)</th>
            <th>Title</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {completedStatusData.map((d) => (
            <tr key={d['Request ID']}>
              <td>{d['Open Time']}</td>
              <td>{d['Request ID']}</td>
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
            <th>Request ID</th>
            <th>Status (In Progress)</th>
            <th>Title</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {in_progressStatusData.map((d) => (
            <tr key={d['Request ID']}>
              <td>{d['Open Time']}</td>
              <td>{d['Request ID']}</td>
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
            <th>Request ID</th>
            <th>Status (Pending Approval)</th>
            <th>Title</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {pendingStatusData.map((d) => (
            <tr key={d['Request ID']}>
              <td>{d['Open Time']}</td>
              <td>{d['Request ID']}</td>
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

export default Table4;
