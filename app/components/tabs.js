import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('hourly');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <div>
        <input 
          type="radio" 
          name="tab" 
          role="tab" 
          className="tab" 
          aria-label="Tab Hourly" 
          checked={activeTab === 'hourly'}
          onChange={() => handleTabChange('hourly')} 
        />
        <label className="tab tab-lifted">Hourly Forecast</label>
        <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab !== 'hourly' ? 'hidden' : ''}`}>
          Hourly Forecast Content
        </div>
      </div>

      <div>
        <input 
          type="radio" 
          name="tab" 
          role="tab" 
          className="tab" 
          aria-label="Tab 7Day" 
          checked={activeTab === 'sevenday'}
          onChange={() => handleTabChange('sevenday')} 
        />
        <label className="tab tab-lifted">7 Day Forecast</label>
        <div role="tabpanel" className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${activeTab !== 'sevenday' ? 'hidden' : ''}`}>
          7 Day Forecast Content
        </div>
      </div>
    </div>
  );
};

export default Tabs;
