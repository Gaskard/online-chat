import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from "../topBar/TopBar.tsx";
import ContactList from "../contactList/ContactList.tsx";
import BottomBar from "../bottomBar/BottomBar.tsx";
import StoriesMenu from "../storiesMenu/StoriesMenu.tsx";
import ChatsList from "../chatsList/ChatsList.tsx";
import WelcomeScreen from "../welcomeScreen/WelcomeScreen.tsx";
import RegistrationForm from "../registrationForm/RegistrationForm.tsx";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/welcome" replace />} />
            <Route path='/welcome' element={<WelcomeScreen />}/>
            <Route path='/registration' element={<RegistrationForm/>}/>

            <Route path='/contacts' element={
                <>
                <TopBar/>
                <ContactList/>
                <BottomBar/>
                </>
            }/>

            <Route path='/chats' element={
                <>
                    <TopBar/>
                    <StoriesMenu/>
                    <ChatsList/>
                    <BottomBar/>
                </>
            }/>
        </Routes>
    );
};

export default AppRoutes;