import React from 'react';
import HomeScreen from "./screens/HomeScreen";
import Provider from "./contexts/Provider";


function App() {
  return (
      <Provider>
        <HomeScreen/>
      </Provider>
  );
}

export default App;
