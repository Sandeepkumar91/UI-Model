import React, { Component } from 'react';
import Style from './Footer.css';
import HomeScreenLogo from '../assets/homeGray.png';
import dashboardLogo from '../assets/dashboardGray.png';
import InvestmentLogo from '../assets/investmentBrandColor.png';
import MyClientsLogo from '../assets/clientGray.png';
import NewsLogo from '../assets/newsGray.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className='screen'>
                    <img src={ HomeScreenLogo } alt='Home' className='Home'/>
                    <span className='name'>Homescreen</span>
                </div>
                <div className='screen dashboard'>
                    <img src={ dashboardLogo } alt='dashboard' className='Home'/>
                    <span className='name'>Dashboard</span>
                </div>
                <div className='screen investment'>
                    <img src={ InvestmentLogo } alt='investment' className='Home'/>
                    <span className='name'>Investment</span>
                </div>
                <div className='screen client'>
                    <img src={ MyClientsLogo } alt='client' className='Home'/>
                    <span className='name'>My Clients</span>
                </div>
                <div className='screen news'>
                    <img src={ NewsLogo } alt='news' className='Home'/>
                    <span className='name'>News & Updates</span>
                </div>
            </div>
        );
    }
}

export default Footer;