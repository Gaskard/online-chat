import './bottomBar.scss'
import {Link} from "react-router-dom";

import contacts from './icons/contacts.svg'
import chats from './icons/chats.svg'
import more from './icons/more.svg'



const BottomBar = () => {


    return (
        <div className="container">
            <nav className="bottom-nav">
                <Link to='/contacts' className="bottom-nav__item">
                    <img src={contacts} alt="" className="bottom-nav__item-img"/>
                </Link>
                <Link to='/chats' className="bottom-nav__item">
                    <img src={chats} alt="" className="bottom-nav__item-img"/>
                </Link>
                <Link to='/more' className="bottom-nav__item">
                    <img src={more} alt="" className="bottom-nav__item-img"/>
                </Link>
            </nav>
        </div>
    )
}

export default BottomBar;