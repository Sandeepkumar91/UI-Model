import React from 'react'
import ReactHighcharts from 'react-highcharts';

const config = {
  title: {
    text: 'My stock chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const MyStockChart = () => {
return(
  <div className='container'>
  <ReactHighcharts
  config = {config}
  />
</div>
) 
}

export default MyStockChart