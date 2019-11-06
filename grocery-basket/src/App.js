import React from 'react';
import Header from './components/HeaderComponent/header'
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
