import React, { Component } from 'react';
import CardImage from '../assets/goalRain.png'

class Card extends Component {
    render() {
        return (
            <div className='container'>
                         <div class="card">
                            <img class="card-img" src={CardImage} alt="Card image" />
                            <div class="card-body">
                            <h4 class="card-title">A Rainy Day</h4>
                            <div class="card-text">Suspendisse faucibus, augue nec euismod tem, dui neque molestie, laoreet faucibus ipsum.</div>
                            </div>
                         </div>
            </div>
        );
    }
}

export default Card;