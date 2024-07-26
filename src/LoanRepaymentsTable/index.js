import React, { useState } from 'react';
import './index.css';


const LoanRepaymentsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const tableData = [
    { regNo: "001", name: "Faith Mutava", loanGiven: 5000, amountDue: 2000, amountPaid: 3000, balance: 0 },
    { regNo: "002", name: "Jane Wanjiru", loanGiven: 8000, amountDue: 4000, amountPaid: 4000, balance: 0 },
    { regNo: "003", name: "Fadhili Mohammed", loanGiven: 6000, amountDue: 2500, amountPaid: 3500, balance: 0 },
    { regNo: "004", name: "Cynthia Maina", loanGiven: 7500, amountDue: 5000, amountPaid: 2500, balance: 0 },
    { regNo: "005", name: "Amanda Ireri", loanGiven: 9000, amountDue: 3000, amountPaid: 6000, balance: 0 },
    { regNo: "006", name: "Mercy Wangari", loanGiven: 10000, amountDue: 4000, amountPaid: 5000, balance: 0 },
    { regNo: "007", name: "Aber Rachel", loanGiven: 12000, amountDue: 5000, amountPaid: 6000, balance: 0 },
    { regNo: "008", name: "Amina Mohammed", loanGiven: 13000, amountDue: 6000, amountPaid: 7000, balance: 0 },
    { regNo: "009", name: "Terry Mitchell", loanGiven: 14000, amountDue: 7000, amountPaid: 8000, balance: 0 },
    { regNo: "010", name: "Martha", loanGiven: 15000, amountDue: 8000, amountPaid: 9000, balance: 0 },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const Pagination = ({ currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(tableData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <div
            key={pageNumber}
            className={`pagination-item ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
    
      <h1 className="loan-repayments">Loan Repayments</h1>
      <div className="loans">
        <table className="loans-table">
          <thead>
            <tr>
              <th></th>
              <th>Reg no.</th>
              <th>Name</th>
              <th>Loan Given</th>
              <th>Amount Due</th>
              <th>Amount Paid</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{row.regNo}</td>
                <td>{row.name}</td>
                <td>{row.loanGiven}</td>
                <td>{row.amountDue}</td>
                <td>{row.amountPaid}</td>
                <td>{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default LoanRepaymentsTable;