import React, { Component } from 'react';
import CardImage from '../assets/goalBigSpend.png'

class Card extends Component {
    render() {
        return (
            <div className='container'>
                         <div class="card">
                            <img class="card-img" src={CardImage} alt="Card image" />
                            <div class="card-body">
                            <h4 class="card-title">A Big Spend</h4>
                            <div class="card-text">Suspendisse faucibus, augue nec euismod tem, dui neque molestie, laoreet faucibus ipsum.</div>
                            </div>
                         </div>
            </div>
        );
    }
}

export default Card;