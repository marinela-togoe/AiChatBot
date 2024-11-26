import React from 'react'
import "./ChatBotApp.css"


const ChatBotApp = ({onGoBack}) => {
  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt new-chat"></i>
        </div>
        <div className="chat-list-item active">
          <h4>Chat 15/08/2024 22:51:42 PM</h4>
          <i className="bx bx-x-circle"></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat 15/08/2024 22:51:42 PM</h4>
          <i className="bx bx-x-circle"></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat 15/08/2024 22:51:42 PM</h4>
          <i className="bx bx-x-circle"></i>
        </div>
      </div>
      <div className="chat-window">
        <div className="chat-title">
          <h3>Chat with AI</h3>
          <i className="bx bx-arrow-back arrow" onClick={onGoBack}></i>
        </div>
        <div className="chat">
          <div className="prompt">
            Hi, how are you? <span>22:56:51 PM</span>
          </div>
          <div className="response">
            Hello! I'm only a computer.... <span>22:56:55 PM</span>
          </div>
          <div className="typing">Typing...</div>
        </div>
        <form className="msg-form">
          <i className="fa-solid fa-face- smile emoji"></i>
          <input
            type="text"
            className="msg-input"
            placeholder="Type a message..."
          />
          <i className="fa-solid fa-paper-plane"></i>
        </form>
      </div>
    </div>
  );
}

export default ChatBotApp
