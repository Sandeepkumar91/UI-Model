import React, { Component } from 'react';

class NativeSelect extends Component {
   state = {
    data: ['sandeep', 'abhilash' , 'dheeraj'],
  };

    const datalist = 
  

  render() {
    return (
    <div>
      <div className="searchForm">
          <input
            placeholder="Search for..."
            onclick={this.handleChange}
          />
      </div>
       <div className="container">
            <ul>
              {this.state.data.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
        </div>
    </div>
    );
  }
}

export default NativeSelect;