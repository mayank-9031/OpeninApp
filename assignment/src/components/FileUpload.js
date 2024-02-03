import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process file upload here
    console.log(file);
  };

  return (
    <div className="upload-container">
      <aside className="sidebar">
        <div className="logo">
          <span>Base</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-item active" F>
            <span className="icon">📊</span>
            <span className="title">Dashboard</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">📤</span>
            <span className="title">Upload</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">🧾</span>
            <span className="title">Invoice</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">📅</span>
            <span className="title">Schedule</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">📆</span>
            <span className="title">Calendar</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">🔔</span>
            <span className="title">Notification</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">⚙️</span>
            <span className="title">Settings</span>
          </a>
        </nav>
      </aside>
      <main className="upload-content">
        <h1>Upload CSV</h1>
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="file-drop-area">
            <input type="file" onChange={handleFileChange} />
            <div className="file-drop-description">
              {file ? file.name : "Drop your excel sheet here or browse"}
            </div>
          </div>
          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>
      </main>
    </div>
  );
};

export default FileUpload;
