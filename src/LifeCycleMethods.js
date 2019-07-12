import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleMethods extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
                  color: 'red',
                  wheels: 4,
                  engine: '4 stroke'     
        }
        
    }
    componentDidMount = () => {
          this.setState({
           color: 'black' 
        })   
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     debugger
    //     console.log(this.state);
        
    // }


    // componentDidUpdate(prevProps, prevState) {
    //     console.log('this is after did update mounted');
    // }

    // componentWillUnmount() {
    //     console.log('this is after unmounted');
    // }

    render() {
        console.log(this.props);
        return (
            <div>
                <h5>Car</h5>
                <p>{this.state.color}</p>
                <p>{this.state.wheels}</p>
                <p>{this.state.engine}</p>
            </div>
        );
    }
}

LifeCycleMethods.propTypes = {

};

export default LifeCycleMethods;