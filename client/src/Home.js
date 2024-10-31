import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };

  // const handleLogout = () => {
  //   console.log("Logged out");
  // };


  // template for chatbot code 
  //const openChatbot = () => {
    //console.log("Open chatbot"); // Replace with your chatbot opening logic
  //};


  // chatbot code 
  const openChatbot = () => {
    console.log("Opening chatbot");
  
    // Set the chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "lfelQ4n09OHewibCFs-YD",
      domain: "www.chatbase.co",
    };
  
    // Check if the script is already loaded to avoid duplication
    if (!document.querySelector("script[src='https://www.chatbase.co/embed.min.js']")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  };
  

  return null; // No visible component is needed, as this is just for embedding the chatbot
}


  
  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">Drug Guardian</div>
      </nav>

      <div className="container">
        <div className="header">
          <h3>Drug Guardian</h3>
          <h5>"Securing Every Dose: Blockchain-Driven Drug Supply Chain to Combat Counterfeit"</h5>
        </div>
        <br />
        <div className="grid-container">
          <div className="register">
            <h5>Step 1: Owner Should Register Raw material suppliers, Manufacturers, Distributors, and Retailers</h5>
            <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
          </div>

          <div className="ordermedicines">
            <h5>Step 2: Owner should order medicines</h5>
            <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm">Order Medicines</button>
          </div>

          <div className="controlchain">
            <h5>Step 3: Control Supply Chain</h5>
            <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">Control Supply Chain</button>
          </div>

          <div className="track">
            <h5>Track the medicines</h5>
            <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">Track Medicines</button>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <div className="chatbot-button" onClick={openChatbot}>
        🗨️
      </div>
    </div>
  );


export default Home;
