import React, { Component } from 'react';
import CardImage from '../assets/goalEducation.png'

class Card extends Component {
    render() {
        return (
            <div className='container'>
                         <div class="card">
                            <img class="card-img" src={CardImage} alt="Card image" />
                            <div class="card-body">
                            <h4 class="card-title">Children's Education</h4>
                            <div class="card-text">Suspendisse faucibus, augue nec euismod tem, dui neque molestie, laoreet faucibus ipsum.</div>
                            </div>
                         </div>
            </div>
        );
    }
}

export default Card;