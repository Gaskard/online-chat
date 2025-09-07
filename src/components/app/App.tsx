import './app.scss'
import 'normalize.css'

import {useState} from "react";

import TopBar from "../topBar/TopBar.tsx";
import ContactList from "../contactList/ContactList.tsx";
import BottomBar from "../bottomBar/BottomBar.tsx";
import StoriesMenu from "../storiesMenu/StoriesMenu.tsx";
import ChatsList from "../chatsList/ChatsList.tsx";
import OpenChatHeader from "../openChatHeader/OpenChatHeader.tsx";
import OpenChatMessages from "../openChatMessages/OpenChatMessages.tsx";
import OpenChatBottomMenu from "../openChatBottomMenu/OpenChatBottomMenu.tsx";
import AppRoutes from "../appRoutes/AppRoutes.tsx";


function App() {

    const [activeTab, setActiveTab] = useState<'contacts' | 'chats' | 'more'>('contacts');


    return (
            <div className="App">
                {activeTab === 'contacts' ?
                <>
                <TopBar activeTab={activeTab}/>
                <ContactList/>
                <BottomBar setActiveTab={setActiveTab}/></> :
                activeTab === 'chats' ?
                <>
                    <TopBar activeTab={activeTab}/>
                    <StoriesMenu/>
                    <ChatsList/>
                    <BottomBar setActiveTab={setActiveTab}/>
                </> : null}
                <OpenChatHeader/>
                <OpenChatMessages/>
                <OpenChatBottomMenu/>
                <AppRoutes activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
    )
}

export default App;