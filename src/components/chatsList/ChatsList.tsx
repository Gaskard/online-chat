import './chatsList.scss'
import '../../styles/reset.scss'
import photo1 from '../contactList/img/photo1.svg'
import photo2 from '../contactList/img/photo2.svg'
import photo3 from '../contactList/img/photo3.svg'

import '../searchInput/SearchInput.tsx'
import SearchInput from "../searchInput/SearchInput.tsx";

const ChatsList = () => {
    return(
        <div className="container">
            <SearchInput/>
            <ul className="chats">
                <li>
                    <button className="chats__item">
                        <img src={photo1} alt="" className="chats__item-img"/>
                        <div className="chats__item-data">
                            <div className="chats__item-info">
                                <div className="chats__item-name">Athalia Putri</div>
                                <div className="chats__item-message">Good morning, did you sleep well?</div>
                            </div>
                            <div className="chats__item-meta">
                                <div className="chats__item-date">Today</div>
                                <div className="chats__item-count">1</div>
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button className="chats__item">
                        <img src={photo2} alt="" className="chats__item-img"/>
                        <div className="chats__item-data">
                            <div className="chats__item-info">
                                <div className="chats__item-name">Raki Devon</div>
                                <div className="chats__item-message">How is it going?</div>
                            </div>
                            <div className="chats__item-meta">
                                <div className="chats__item-date">17/6</div>
                                <div className="chats__item-count"></div>
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button className="chats__item">
                        <img src={photo3} alt="" className="chats__item-img"/>
                        <div className="chats__item-data">
                            <div className="chats__item-info">
                                <div className="chats__item-name">Erlan Sadewa</div>
                                <div className="chats__item-message">Aight, noted</div>
                            </div>
                            <div className="chats__item-meta">
                                <div className="chats__item-date">17/6</div>
                                <div className="chats__item-count">1</div>
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default ChatsList;