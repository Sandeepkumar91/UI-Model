import React from 'react';
import DisplayData from './DisplayData';
import ClientTable from './ClientTable';
import MyStockChart from './MyStockChart';
import BarChart from './BarChart';
import Chart from './Chart';
import GridView from './GridView';
import Header from '../src/Cards/Header';
import Footer from '../src/Cards/Footer';
import Landing from '../src/Cards/Landing'



function App() {
  return (
    
      <div className="App">
       {/* <MyStockChart />
       <BarChart />
       <Chart /> */}
       <Header />
       <Landing />
       <GridView />
       <Footer />
      </div>

    
  );
}

export default App;
 