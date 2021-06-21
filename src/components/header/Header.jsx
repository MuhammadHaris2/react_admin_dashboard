import React from 'react';
import './header.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Header = () => {
    return (
        <div className="header">
            <div className="headerWrapper">
                <div className="headerLeft">
                    <span className="logo">
                        Admin
                    </span>
                </div>
                <div className="headerRight">
                    <div className="headerRightIcon">
                        <NotificationsNone />
                        <span className="headerIconBadge">2</span>
                    </div>
                    <div className="headerRightIcon">
                        <Language />
                        <span className="headerIconBadge">2</span>
                    </div>
                    <div className="headerRightIcon">
                        <Settings />   
                    </div>

                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="headerRightAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Header;
