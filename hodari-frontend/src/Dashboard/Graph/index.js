import './index.css';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Graph = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
    { name: 'Jun', value: 239 },
    { name: 'Jul', value: 349 },
    { name: 'Aug', value: 430 },
    { name: 'Sep', value: 401 },
    { name: 'Oct', value: 300 },
    { name: 'Nov', value: 200 },
    { name: 'Dec', value: 278 },
  ];

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={600}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{fill: 'rgba(0, 0, 0, 0.1)'}} />
          <Bar dataKey="value" fill="#4169E1" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;