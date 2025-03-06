import React, { useState } from "react";
import "./Expensesplitter.css";

function ExpenseSplitter({ onNavigate, onCalculate }) {
  const [participants, setParticipants] = useState([{ name: "", amount: "" }]);
  const [expenseTitle, setExpenseTitle] = useState("");  
  const [expenseDate, setExpenseDate] = useState("");  // ✅ State for Date
  const [menuOpen, setMenuOpen] = useState(false);

  function addParticipant() {
    setParticipants([...participants, { name: "", amount: "" }]);
  }

  function removeParticipant(index) {
    const updatedParticipants = [...participants];
    updatedParticipants.splice(index, 1);
    setParticipants(updatedParticipants);
  }

  function calculateSplit() {
    const totalExpense = participants.reduce(
      (total, participant) => total + parseFloat(participant.amount || 0),
      0
    );
    const splitAmount = totalExpense / participants.length;

    const balances = participants.map((participant) => ({
      name: participant.name,
      balance: parseFloat(participant.amount || 0) - splitAmount,
    }));

    const settleTransactions = [];
    let payers = balances.filter((b) => b.balance < 0);
    let receivers = balances.filter((b) => b.balance > 0);

    payers.sort((a, b) => a.balance - b.balance);
    receivers.sort((a, b) => b.balance - a.balance);

    while (payers.length && receivers.length) {
      const payer = payers[0];
      const receiver = receivers[0];

      const settleAmount = Math.min(
        Math.abs(payer.balance),
        receiver.balance
      ).toFixed(2);

      settleTransactions.push({
        payer: payer.name,
        receiver: receiver.name,
        amount: settleAmount,
      });

      payer.balance += parseFloat(settleAmount);
      receiver.balance -= parseFloat(settleAmount);

      if (Math.abs(payer.balance) < 0.01) payers.shift();
      if (receiver.balance < 0.01) receivers.shift();
    }

    // ✅ Pass expenseTitle and expenseDate along with transactions
    onCalculate(settleTransactions, expenseTitle, expenseDate);
  }

  return (
    <div className="contain">
      <button className="hamburger-container" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>

      <div className={`menu ${menuOpen ? "" : "hidden"}`}>
        <ul>
          <li onClick={() => onNavigate("home")}>Home</li>
          <li>About</li>
          <li>History</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <h2 className="head">Add Participants</h2>

      {/* ✅ Expense Title Input */}
      <div className="input-row">
        <input
          type="text"
          placeholder="Expense Title"
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
        />
      </div>

      {/* ✅ Expense Date Input */}
      <div className="input-row">
        <input
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
        />
      </div>

      <div className="party">
        {participants.map((participant, index) => (
          <div key={index} className="input-row">
            <input
              type="text"
              placeholder="Name"
              value={participant.name}
              onChange={(e) => {
                const updatedParticipants = [...participants];
                updatedParticipants[index].name = e.target.value;
                setParticipants(updatedParticipants);
              }}
            />
            <input
              type="number"
              placeholder="Amount"
              value={participant.amount}
              onChange={(e) => {
                const updatedParticipants = [...participants];
                updatedParticipants[index].amount = e.target.value;
                setParticipants(updatedParticipants);
              }}
            />
            <button onClick={() => removeParticipant(index)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="gap">
        <button onClick={addParticipant}>Add Participant</button>
        <button onClick={calculateSplit}>Calculate</button>
      </div>
    </div>
  );
}

export default ExpenseSplitter;
