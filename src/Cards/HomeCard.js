import React, { Component } from 'react';
import CardImage from '../assets/goalHome.png'

class Card extends Component {
    render() {
        return (
                     <div class="col-sm-4">
                         <div class="card" key={this.props.id}>
                            <img class="card-img" src={this.props.imageLogo} alt="Card" />
                            <div class="card-body">
                            <h4 class="card-title">{this.props.title}</h4>
                            <div class="card-text">{this.props.text}</div>
                            </div>
                         </div>
                    </div>
        );
    }
}

export default Card;