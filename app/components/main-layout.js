import React from 'react';

export const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="current-weather-section">
        {/* Logo and Current Weather Info */}
      </div>
      
      <div className="main-content">
        {children}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
        }
        .current-weather-section {
          width: 25%;
          border-right: 1px solid #ddd; // Just for visual separation
        }
        .main-content {
          width: 75%;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};
