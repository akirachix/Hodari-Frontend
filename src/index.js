import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Loan from './Table/Loan';
import LoanRepaymentsTable from './LoanRepaymentsTable';
// import Card from './components/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Card /> */}
    <LoanRepaymentsTable />
  </React.StrictMode>
);

reportWebVitals();
