import './openChatMessages.scss'

import Message from "../message/Message.tsx";

const OpenChatMessages = () => {
    return (
        <div className="container">
            <ul className="chat-area">
                <Message/>
            </ul>
        </div>
    )
}

export default OpenChatMessages;