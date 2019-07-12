import React, { Component } from 'react';
import Style from './Header.css';
import Logo from '../assets/color.png';
import SearchIcon from '../assets/search.png'
import CalendarIcon from '../assets/calendar.png'
import NoteIcon from '../assets/note.png';
import BookMarkIon from '../assets/bookmark.png';
import NotificationsIon from '../assets/notification.png';
import SettingsIcon from '../assets/settings.png';
import ProfileImage from '../assets/image.png';
import ArrowIcon from '../assets/downBlack.png'


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='company-logo' alt='logo' src={ Logo }/>
                <div className='search-box'>
                <img className='search-icon' alt='search' src={ SearchIcon } />
                <input type="text" placeholder="Search.." name="search" className='search' />
                </div>
                <img className='calendar-icon' alt='calendar' src={ CalendarIcon } />
                <img  className='note-icon' alt='note' src={ NoteIcon } />
                <img  className='bookmark-icon' alt='note' src={ BookMarkIon } />
                <img className='notifications-icon' alt='note' src={ NotificationsIon } />
                <img className='settings-icon' alt='note' src={ SettingsIcon } />
                <hr className='vertical-line'></hr>
                <img src={ProfileImage} alt="profile" className='profile'/>
                <div className='userName'>Kelly Ng</div>
                <div className='downArrow-icon'>
                <img alt='downArrow' src={ ArrowIcon } />
                </div>
            </div>
        );
    }
}

export default Header;