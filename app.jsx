import React from 'react';
import { WeatherProvider } from '/api/WeatherContext.js';
//import YourMainComponent from './path/to/YourMainComponent';

function App() {
  return (
    <WeatherProvider>
      <YourMainComponent />
      {/* You can add more components here as needed */}
    </WeatherProvider>
  );
}

export default App;
