import React, { useState, useEffect } from 'react';
import dataCSV from '../assets/Sample_Incident_Data.csv';

const CSVtoJSONConverter = () => {
  const [jsonData, setJSONData] = useState('');

  useEffect(() => {
    console.log(dataCSV)
    const convertToJSON = () => {
      const lines = dataCSV.split('\n');
      const result = [];
      const headers = lines[0].split(',');

      for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentLine[j];
        }

        result.push(obj);
      }

      setJSONData(JSON.stringify(result));
    };

    convertToJSON();
  }, []);

  return (
    <div>
      <textarea rows="10" cols="50" value={jsonData} readOnly />
    </div>
  );
};

export default CSVtoJSONConverter;
