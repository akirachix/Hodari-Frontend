import React from 'react';
import Graph from './Graph';
import './index.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
     
      
      <main className="dashboard-main">
        <div className="statistics">
          <div className="stat-box">
            <h2>526</h2>
            <p>Total Farmers</p>
          </div>
          <div className="stat-box">
            <h2>334,256</h2>
            <p>Total Loan Given</p>
          </div>
          <div className="stat-box">
            <h2>224,206</h2>
            <p>Total Amount Paid</p>
          </div>
        </div>
        <div className="graph-container">
          <h1>Loan Disbursements</h1>
          <Graph />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;