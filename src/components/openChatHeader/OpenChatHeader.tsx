import './openChatHeader.scss'

import back from './icons/back.svg'
import burger from './icons/burger.svg'
import search from './icons/search.svg'
import {useNavigate} from "react-router-dom";

const OpenChatHeader = () => {

    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="chat">
                <header className="chat__header">
                    <div className="chat__header-left">
                        <button
                            onClick={() => navigate(-1)}
                            className="chat__header-left-back">
                            <img src={back} alt="back"/>
                        </button>
                        <div className="chat__header-left-name">Athalia Putri</div>
                    </div>
                    <div className="chat__header-right">
                        <button className="chat__header-right-search"><img src={search} alt="search"/></button>
                        <button className="chat__header-right-burger"><img src={burger} alt="burger" /></button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default OpenChatHeader;