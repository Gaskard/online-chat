import './topBar.scss'
import '../../styles/base.scss'

import plusIcon from './icons/plus.svg'
import newMessageIcon from './icons/newMessage.svg'
import chatSelectIcon from './icons/chatSelect.svg'

type BarDataType = {
    activeTab: 'contacts' | 'chats' | 'more',
}

const topBarData = {
    contacts: {
        label: 'Contacts',
        icon: [<img className="header__icons-item" src={plusIcon} alt="" />]
    },
    chats: {
        label: 'Chats',
        icon: [
            <img className="header__icons-item" src={newMessageIcon} alt=""/>,
            <img className="header__icons-item" src={chatSelectIcon} alt=""/>
        ]
    },
    more: {
        label: 'More',
        icon: []
    }
}


const TopBar = ({activeTab}: BarDataType) => {

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