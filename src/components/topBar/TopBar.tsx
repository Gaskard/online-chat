import './topBar.scss'
import '../../styles/base.scss'

import plusIcon from './icons/plus.svg'
import newMessageIcon from './icons/newMessage.svg'
import chatSelectIcon from './icons/chatSelect.svg'
import {useLocation} from "react-router-dom";

type TabName = 'contacts' | 'chats' | 'more'

const topBarData = {
    contacts: {
        label: 'Contacts',
        icon: [<button className="header__icons-item" ><img src={plusIcon} alt="" /></button>]
    },
    chats: {
        label: 'Chats',
        icon: [
            <button className="header__icons-item">
                <img src={newMessageIcon} alt=""/>
            </button>,
            <button className="header__icons-item">
                <img src={chatSelectIcon} alt=""/>
            </button>
        ]
    },
    more: {
        label: 'More',
        icon: []
    }
}


const TopBar = () => {
    const location = useLocation()
    const activeTab: TabName =
        location.pathname.includes('contacts') ? 'contacts' :
            location.pathname.includes('chats') ? 'chats' : 'more'

    const currentTab = topBarData[activeTab]

    return (
        <div className="container">
            <header className="header">
                <h2 className="header__title">{currentTab.label}</h2>
                <div className="header__icons">
                    {currentTab.icon?.map((icon, index: number) =>
                        <span key={index}>{icon}</span>
                    )}
                </div>
            </header>
        </div>
    )
}

export default TopBar;