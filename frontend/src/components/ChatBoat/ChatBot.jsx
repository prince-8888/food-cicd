import React, { useState } from "react";
import "./ChatBot.css"; // Import external CSS

const responses = {
  hello: "Hi there! 👋 How can I help you today?",
  order: "You can view your orders in the 'My Orders' section.",
  cancel: "To cancel an order, go to 'My Orders' and click 'Cancel'.",
  delivery: "Your food is being prepared and will be delivered soon!",
  default: "Sorry, I didn’t understand that. Please try again or contact support."
};

const suggestions = [
  "Hello",
  "Where is my order?",
  "How to cancel order?",
  "Delivery time?"
];

function getReply(message) {
  const msg = message.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) return responses.hello;
  if (msg.includes("order")) return responses.order;
  if (msg.includes("cancel")) return responses.cancel;
  if (msg.includes("delivery")) return responses.delivery;
  return responses.default;
}

export default function ChatBotWidget() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleUserMessage = (input) => {
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = { from: "bot", text: getReply(input) };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {/* <button className="chatbot-icon" onClick={() => setOpen(!open)}>
        💬
      </button> */}

      {open && (
        
        <div className="chatbot-box">
          <div className="chatbot-header">ChatBot 🤖</div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.from === "user" ? "user" : "bot"}`}
              >
               
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator">
                {/* <span>ChatBot is typing</span> */}
                <div className="dots">
                  <div className="dot dot1"></div>
                  <div className="dot dot2"></div>
                  <div className="dot dot3"></div>
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-suggestions">
            {suggestions.map((text, idx) => (
              <button key={idx} onClick={() => handleUserMessage(text)}>
                {text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
