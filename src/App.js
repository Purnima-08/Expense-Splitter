import React, { useState } from "react";
import ExpenseSplitter from "./components/ExpenseSplitter";
import Final from "./components/Final";
import Home from "./components/home";
import LoginForm from "./components/loginform";

const App = () => {
  const [page, setPage] = useState("home"); // Start with Home page
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [transactions, setTransactions] = useState([]);

  // ✅ Add state for expense title and date
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setPage("expenseSplitter");
  };

  const handleCalculate = (result, title, date) => {
    setTransactions(result);
    setExpenseTitle(title);  // ✅ Store the title
    setExpenseDate(date);    // ✅ Store the date
    setPage("final"); // Move to Final page after calculation
  };

  return (
    <div>
      {page === "login" && <LoginForm onLoginSuccess={handleLoginSuccess} onBack={() => setPage("home")} />}
      {page === "home" && <Home onNavigate={() => setPage("login")} />}
      {page === "expenseSplitter" && isLoggedIn && (
        <ExpenseSplitter 
          onNavigate={setPage} 
          onCalculate={handleCalculate} 
        />
      )}
      {page === "final" && (
        <Final
          transactions={transactions}
          expenseTitle={expenseTitle}  // ✅ Pass title
          expenseDate={expenseDate}    // ✅ Pass date
          onBack={() => setPage("expenseSplitter")}
          onHome={() => setPage("home")}
        />
      )}
    </div>
  );
};

export default App;
