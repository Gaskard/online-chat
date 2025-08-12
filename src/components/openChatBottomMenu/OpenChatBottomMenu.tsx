import './openChatBottomMenu.scss'

import plus from './icons/plus.svg'
import send from './icons/send.svg'

const OpenChatBottomMenu = () => {
    return (
        <div className="container">
            <div className="chat-form">
                <button className="chat-form__attach-button">
                    <img src={plus} alt="attach file" className="chat-form__plus-icon"/>
                </button>
                <input type="text" className="chat-form__input"/>
                <button className="chat-form__send-button">
                    <img src={send} alt="send message" className="chat-form__send-icon"/>
                </button>
            </div>
        </div>
    )
}

export default OpenChatBottomMenu