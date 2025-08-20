import './openChatBottomMenu.scss'

import plus from './icons/plus.svg'
import send from './icons/send.svg'

import {useState} from "react";

import type {FormEvent} from "react";

type OpenChatBottomMenuProps = {
    ws: WebSocket | null;
}

const OpenChatBottomMenu = ({ws}: OpenChatBottomMenuProps) => {

    const [message, setMessage] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!message.trim()) return;

        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(message);
            console.log(`Отправлено: ${message}`);
        }
        setMessage('')
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="chat-form">
                <button className="chat-form__attach-button">
                    <img src={plus} alt="attach file" className="chat-form__plus-icon"/>
                </button>
                <input type="text"
                       value={message}
                       onChange={e => setMessage(e.target.value)}
                       className="chat-form__input"/>
                <button type='submit' className="chat-form__send-button">
                    <img src={send} alt="send message" className="chat-form__send-icon"/>
                </button>
            </form>
        </div>
    )
}

export default OpenChatBottomMenu