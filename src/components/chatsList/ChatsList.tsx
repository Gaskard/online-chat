import './chatsList.scss'

import '../searchInput/SearchInput.tsx'
import SearchInput from "../searchInput/SearchInput.tsx";

const ChatsList = () => {
    return(
        <div className="container">
            <SearchInput/>
            <ul className="chats">
                <li className="chats__item">
                    <div className="chats__item-info">
                        <div className="chats__item-name">Athalia Putri</div>
                        <div className="chats__item-message">Good morning, did you sleep well?</div>
                    </div>
                    <div className="chats__item-meta">
                        <div className="chats__item-date">Today</div>
                        <div className="chats__item-count">1</div>
                    </div>
                </li>
                <li className="chats__item">
                    <div className="chats__item-info">
                        <div className="chats__item-name">Raki Devon</div>
                        <div className="chats__item-message">How is it going?</div>
                    </div>
                    <div className="chats__item-meta">
                        <div className="chats__item-date">17/6</div>
                        <div className="chats__item-count"></div>
                    </div>
                </li>
                <li className="chats__item">
                    <div className="chats__item-info">
                        <div className="chats__item-name"></div>
                        <div className="chats__item-message"></div>
                    </div>
                    <div className="chats__item-meta">
                        <div className="chats__item-date"></div>
                        <div className="chats__item-count"></div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ChatsList;