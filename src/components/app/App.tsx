import './app.scss'

import {useState} from "react";

import TopBar from "../topBar/TopBar.tsx";
import ContactList from "../contactList/ContactList.tsx";
import BottomBar from "../bottomBar/BottomBar.tsx";
import StoriesMenu from "../storiesMenu/StoriesMenu.tsx";


function App() {

    const [activeTab, setActiveTab] = useState<'contacts' | 'chats' | 'more'>('contacts');

    return (
        <div className="App">
            <TopBar activeTab={activeTab}/>
            <ContactList/>
            <BottomBar setActiveTab={setActiveTab}/>
            <StoriesMenu/>
        </div>
    )
}

export default App;