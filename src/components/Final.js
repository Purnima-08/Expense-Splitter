import React, { useState } from "react";
import "./Expensesplitter.css";
import "./Final.css";

function Final({ transactions, expenseTitle, expenseDate, onBack, onHome }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contain">
      <button className="hamburger-container" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>

      <div className={`menu ${menuOpen ? "" : "hidden"}`}>
        <ul>
          <li onClick={onHome}>Home</li>
          <li>About</li>
          <li>History</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <h2 className="head">Settle Transactions</h2>

      {/* ✅ Display the Expense Title and Date */}
      <h3 className="expense-title">Expense: {expenseTitle || "No Title Provided"}</h3>
      <h4 className="expense-date">Date: {expenseDate || "No Date Provided"}</h4>

      {/* ✅ Display the calculated expense splitting result */}
      <div className="res">
        {transactions.length > 0 ? (
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>
                {transaction.payer} pays {transaction.receiver} Rs{transaction.amount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions to display.</p>
        )}
      </div>

      {/* ✅ Save and Back Buttons */}
      <button className="save">Save</button>
      <button className="back" onClick={onBack}>Back</button>
    </div>
  );
}

export default Final;
