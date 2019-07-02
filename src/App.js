import React from 'react';
import DisplayData from './DisplayData';
import ClientTable from './ClientTable';
import MyStockChart from './MyStockChart';
import BarChart from './BarChart'

function App() {
  return (
      <div className="App">
       <MyStockChart />
       <BarChart />
      </div>
    
  );
}

export default App;
 