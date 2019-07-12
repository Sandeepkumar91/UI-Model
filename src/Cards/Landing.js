import React, { Component } from 'react';
import Style from '../Cards/Landing.css';
import FilterIcon from '../assets/filter.png';
import IdeaIcon from '../assets/ideaDefault.png';
import LogText from '../assets/text.png';

class Landing extends Component {
    render() {
        return (
            <div className='landing-section'>
                <p className='landing-option'>Strategy</p>
                <p className='landing-option'>Bond</p>
                <p className='landing-option'>Fund</p>
                <p className='landing-option'>Goal-based</p>
                <p className='landing-option'>Customized</p>
                <p className='landing-option'>Equity</p>
                <div className='filter-icon'>
                 <img className='filter' alt='filter' src={FilterIcon}/>
                </div>
                <div className='idea-icon'>
                 <img className='idea' alt='filter' src={IdeaIcon}/>
                </div>
                 <img className='text' alt='filter' src={LogText}/>
                <div className='text-name'>Balanced</div>
            </div>
        );
    }
}

export default Landing;