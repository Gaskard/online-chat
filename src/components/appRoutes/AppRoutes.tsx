import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from "../topBar/TopBar.tsx";
import ContactList from "../contactList/ContactList.tsx";
import BottomBar from "../bottomBar/BottomBar.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                <TopBar/>
                <ContactList/>
                <BottomBar/>
                </>
            }/>
        </Routes>
    );
};

export default AppRoutes;