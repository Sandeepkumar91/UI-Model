import React, { Component } from 'react';
import Select from 'react-select';
import image from './assets/logo.png'

 
const options = [
        { value: 'Mariana Augustine', label: <div><img src={ image } alt='img'/><span>Mariana Augustine</span></div> },
        { value: 'Nick Giananapolus', label: <div><img src={image} alt='img'/><span>Nick Giananapolus</span></div> },
        { value: 'Narayana Garner', label: <div><img src={image} alt='img'/><span>Narayana Garner</span></div> },
        { value: 'Anita Gros', label: <div><img src={image} alt='img'/><span>Anita Gros</span></div> },
        { value: 'Megan Smith', label: <div><img src={image} alt='img'/><span>Megan Smith</span></div> },  
    ];


class SelectText extends Component {

        state = {
            selectedOption: null,
        }
        handleChange = (selectedOption) => {
            this.setState({ selectedOption });
        }
        
        render() {
            const { selectedOption } = this.state;
        
            return (
           
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                isMulti
                classNamePrefix
                 />
            );
        }
}

export default SelectText;