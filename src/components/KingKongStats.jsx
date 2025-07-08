import React from 'react';

const KingKongStats = () => {
  const stats = [
    {
      number: "$2.3B+",
      label: "Client Revenue Generated"
    },
    {
      number: "340%",
      label: "Average ROI Increase"
    },
    {
      number: "500+",
      label: "AI Employees Deployed"
    },
    {
      number: "97%",
      label: "Client Retention Rate"
    }
  ];

  return (
    <div className="kk-section-dark">
      <div className="kk-container">
        <div className="text-center mb-16">
          <h2 className="kk-section-title text-white mb-6">
            THE NUMBERS DON'T LIE
          </h2>
          <p className="kk-subtitle text-gray-300">
            THESE ARE THE RESULTS WE DELIVER FOR OUR CLIENTS
          </p>
        </div>
        
        <div className="kk-grid-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="kk-stat kk-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="kk-stat-number">{stat.number}</div>
              <div className="kk-stat-label text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="kk-guarantee">
            🛡️ 30-DAY MONEY-BACK GUARANTEE
          </div>
        </div>
      </div>
    </div>
  );
};

export default KingKongStats;

