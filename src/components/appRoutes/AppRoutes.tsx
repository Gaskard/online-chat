import type { Dispatch, SetStateAction } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from "../topBar/TopBar.tsx";
import ContactList from "../contactList/ContactList.tsx";
import BottomBar from "../bottomBar/BottomBar.tsx";
import StoriesMenu from "../storiesMenu/StoriesMenu.tsx";
import ChatsList from "../chatsList/ChatsList.tsx";

type TabName = "contacts" | "chats" | "more";

type BarDataType = {
    activeTab: TabName,
    setActiveTab: Dispatch<SetStateAction<TabName>>,
}

const AppRoutes = ({activeTab, setActiveTab}: BarDataType) => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/contacts' replace/>}/>

            <Route path='/contacts' element={
                <>
                <TopBar activeTab={activeTab}/>
                <ContactList/>
                <BottomBar setActiveTab={setActiveTab}/>
                </>
            }/>

            <Route path='/chats' element={
                <>
                    <TopBar activeTab={activeTab}/>
                    <StoriesMenu/>
                    <ChatsList/>
                    <BottomBar setActiveTab={setActiveTab}/>
                </>
            }/>
        </Routes>
    );
};

export default AppRoutes;