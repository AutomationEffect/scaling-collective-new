import React from 'react';

const KingKongScrollingBanner = () => {
  const proofPoints = [
    "🚀 GENERATED $2.3B+ IN CLIENT REVENUE",
    "💰 AVERAGE CLIENT ROI: 340%", 
    "⚡ 30-DAY MONEY-BACK GUARANTEE",
    "🏆 #1 RATED AI IMPLEMENTATION AGENCY",
    "📈 97% CLIENT RETENTION RATE",
    "🔥 DEPLOYED 500+ AI EMPLOYEES",
    "💎 TRUSTED BY FORTUNE 500 COMPANIES",
    "⭐ 4.9/5 STAR RATING (2,847 REVIEWS)"
  ];

  return (
    <div className="kk-scrolling-banner">
      <div className="kk-scrolling-content">
        {proofPoints.map((point, index) => (
          <span key={index} style={{ marginRight: '4rem' }}>
            {point}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {proofPoints.map((point, index) => (
          <span key={`duplicate-${index}`} style={{ marginRight: '4rem' }}>
            {point}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KingKongScrollingBanner;

