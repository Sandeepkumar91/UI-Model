import React, { Component } from 'react';
import Style from '../Cards/Landing.css';
import FilterIcon from '../assets/filter.png';
import IdeaIcon from '../assets/ideaDefault.png';
import LogText from '../assets/text.png';

class Landing extends Component {
    render() {
        return (
            <div className='landing-section'>
                <div className='landing-option'>Strategy</div>
                <div className='landing-option'>Bond</div>
                <div className='landing-option'>Fund</div>
                <div className='landing-option-goal-box'>Goal-based</div>
                <div className='landing-option'>Customized</div>
                <div className='landing-option'>Equity</div>
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