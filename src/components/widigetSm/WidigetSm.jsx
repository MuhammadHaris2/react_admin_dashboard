import React from 'react';
import './widigetSm.css';
import { Visibility } from '@material-ui/icons';

const WidigetSm = () => {
    return (
        <div className="widigetSm">
            <span className="widigetSmTitle">New Join Member</span>
            <ul className="widigetSmList">
                <li className="widigetSmListItem">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widigetSmImg" />
                    <div className="widigetSmUser">
                       <span className="widigetSmUsername">Muhammad Haris</span>
                       <span className="widigetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widigetSmUserbutton"><Visibility className="widigetsmIcon"/>Display</button>
                </li>
            </ul>
            <ul className="widigetSmList">
                <li className="widigetSmListItem">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widigetSmImg" />
                    <div className="widigetSmUser">
                       <span className="widigetSmUsername">Haris</span>
                       <span className="widigetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widigetSmUserbutton"><Visibility className="widigetsmIcon"/>Display</button>
                </li>
            </ul>
            <ul className="widigetSmList">
                <li className="widigetSmListItem">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widigetSmImg" />
                    <div className="widigetSmUser">
                       <span className="widigetSmUsername">Haris</span>
                       <span className="widigetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widigetSmUserbutton"><Visibility className="widigetsmIcon"/>Display</button>
                </li>
            </ul>
            <ul className="widigetSmList">
                <li className="widigetSmListItem">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widigetSmImg" />
                    <div className="widigetSmUser">
                       <span className="widigetSmUsername">Haris</span>
                       <span className="widigetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widigetSmUserbutton"><Visibility className="widigetsmIcon"/>Display</button>
                </li>
            </ul>
        </div>
    )
}

export default WidigetSm
