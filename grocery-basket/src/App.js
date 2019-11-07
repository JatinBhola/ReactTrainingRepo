import React from 'react';
import Header from './components/HeaderComponent/Header'
import GroceryManager from './containers/GroceryManager/GroceryManager';
function App() {
  return (
    <div className="App">
      <Header />
      <GroceryManager />
    </div>
  );
}

export default App;
