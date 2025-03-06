import React, { useState } from "react";
import "./home.css"; // Ensure you have styles for menu and content

function Home({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState("home"); // Track which page is active

  const handleMenuClick = (content) => {
    setSelectedContent(content); // Change the displayed content
    setMenuOpen(false); // Close menu after selection
  };

  const features = [
    { icon: "💸", title: "Effortless Splitting", description: "Easily track and split expenses among friends and family." },
    { icon: "📅", title: "Recurring Expenses", description: "Set up automatic expense splitting for rent, subscriptions, and monthly bills." },
    { icon: "🤝", title: "Transparency & Fairness", description: "See clear breakdowns of who owes what with no confusion." },
    { icon: "💵", title: "Easy Payments", description: "Use built-in payment options to settle debts instantly." },
    { icon: "📊", title: "Simplified Budgeting", description: "Manage shared expenses and stay on top of your budget." },
    { icon: "💰", title: "Expense Tracking", description: "Input expenses, and we'll track who owes whom for you." },
    { icon: "💳", title: "Seamless Transactions", description: "No stress about losing cash or depositing checks." },
    { icon: "🔍", title: "Financial Insights", description: "Gain insights into your shared expenses." },
    { icon: "🐷", title: "Smart Budgeting", description: "Avoid surprises and better manage your budget." }
  ];

  return (
    <div className="content">
      {/* Hamburger Menu Button */}
      <button className="hamburger-container" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>

      {/* Sidebar Menu */}
      <div className={`menu ${menuOpen ? "" : "hidden"}`}>
        <ul>
          <li onClick={() => handleMenuClick("home")}>Home</li>
          <li onClick={() => handleMenuClick("about")}>About</li>
          <li onClick={() => handleMenuClick("history")}>History</li>
          <li onClick={() => handleMenuClick("privacy")}>Privacy policy</li>
        </ul>
      </div>

      {/* Content Based on Selected Page */}
      <div className="text-container">
        {selectedContent === "home" && (
          <>
            <h1 className="title">Equal Share - Expense Splitter</h1>
            <p className="description">
              Splitting expenses with friends, family, or colleagues can be a hassle.
              Expense Splitter makes it simple and fair for everyone involved.
              Easily add expenses and assign shares to different people.
              Track who owes what in real time with clear summaries.
              No more confusion over payments or manual calculations.
              Perfect for trips, rent, dining, and group activities.
              Settle debts quickly and keep financial relationships stress-free.
              Stay organized and never forget a shared expense again.
              Start using Expense Splitter today and make cost-sharing effortless!
            </p>
            <button className="start" onClick={onNavigate}>Get Started</button>

            {/* Show Image Only on Home Page */}
            <div className="image-container">
              <img
                src="https://pay-solver.com/assets/people-giving-money-to-each-other-min-a9b44f06.png"
                className="image"
                alt="Expense Splitter"
              />
            </div>
          </>
        )}

        {selectedContent === "about" && (
          <>
            <h1 className="title">About Expense Splitter</h1>
            <p className="description">
              Expense Splitter is designed to simplify the process of dividing expenses among friends, family, or colleagues.
              Whether you're sharing rent, going on trips, or managing group expenses, our tool ensures a hassle-free experience.
              Keep track of payments, avoid awkward money conversations, and maintain transparency in shared expenses.
            </p>
          </>
        )}

        {selectedContent === "history" && (
          <>
            <h1 className="title">History</h1>
            <p className="description">
              The idea for Expense Splitter was born out of the need for a simple, fair, and efficient way to handle shared expenses.
              Over time, we've refined our features to ensure users get the best possible experience when managing group finances.
            </p>
          </>
        )}

{selectedContent === "privacy" && (
  <>
    <div className="privacy-container">
      <div className="privacy-text">
        <h1 className="title">Privacy Policy</h1>
        <p className="description">
          Your privacy is our priority. We are committed to protecting your personal and financial information while providing you with a seamless expense-sharing experience.
        </p>
        
        <h3 className="subtitle">1. Data Collection</h3>
        <p className="description">
          We collect only the necessary data to operate our service, including your name, email, and expense details. We do not store sensitive financial data such as bank account or card details.
        </p>

       

        <h3 className="subtitle">3. Sharing of Information</h3>
        <p className="description">
          We do not sell or share your data with third-party advertisers. Your information is only used within the platform to facilitate expense tracking and settlements.
        </p>

      
        <p className="description">
          If you have any concerns about privacy, feel free to <a href="mailto:support@expensesplitter.com">contact us</a>.
        </p>
      </div>

      {/* Image at right corner */}
      <div className="privacy-image">
        <img 
          src="https://t4.ftcdn.net/jpg/04/90/93/79/240_F_490937963_NtPYFZOWzV2M92ltyf1SIMgMVl1N9L1g.jpg" 
          alt="Secure Data" 
        />
      </div>
    </div>
  </>
)}



      </div>
      <div className="comparison-container">
        <div className="comparison-card without">
          <h2 className="without-title">When the expense is split unfairly</h2>
          <img src="https://img.freepik.com/premium-vector/two-men-office-workers-character-divide-money-flat-cartoon-illustration_133260-51.jpg" alt="Without PaySolver" />
          <p className="without-text">Someone who consistently ends up paying less might feel embarrassed or awkward, even if they aren't intentionally trying to avoid paying their share. This can make them uncomfortable in social situations.</p>
        </div>

        <div className="comparison-card with">
          <h2 className="with-title">When the expense is split fairly</h2>
          <img src="https://media.gettyimages.com/id/643137108/photo/ecstatic-group-enjoying-the-party.jpg?s=612x612&w=0&k=20&c=saW_oIf8jjuJ_rPjCrQkKHLcJqYxvYEA7_CiwbTktcs=" alt="Fair Split" />
          <p className="with-text">Splitting expenses fairly among friends avoids one person paying everything. Clear communication beforehand prevents misunderstandings. Promptly settling up maintains good relationships.</p>
        </div>
      </div>
      {/* Features Section */}
      {selectedContent === "home" && (
        <div className="features-section">
          <h2 className="features-heading">Why Use Expense Splitter?</h2>
          <div className="features-container">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-social">
          <ul>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-linkedin"></i></li>
          </ul>
        </div>

        <p className="footer-text">© 2025 Expense Splitter. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
