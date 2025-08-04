import './bottomBar.scss'

import contacts from './icons/contacts.svg'
import chats from './icons/chats.svg'
import more from './icons/more.svg'

type BottomBarProps = {
    setActiveTab: (tab: 'contacts' | 'chats' | 'more' ) => void
}

const BottomBar = ({setActiveTab}: BottomBarProps) => {


    return (
        <div className="container">
            <nav className="bottom-nav">
                <button onClick={() => setActiveTab('contacts')} className="bottom-nav__item">
                    <img src={contacts} alt="" className="bottom-nav__item-img"/>
                </button>
                <button onClick={() => setActiveTab('chats')} className="bottom-nav__item">
                    <img src={chats} alt="" className="bottom-nav__item-img"/>
                </button>
                <button onClick={() => setActiveTab('more')} className="bottom-nav__item">
                    <img src={more} alt="" className="bottom-nav__item-img"/>
                </button>
            </nav>
        </div>
    )
}

export default BottomBar;