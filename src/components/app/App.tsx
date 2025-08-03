import './app.scss'
import TopBar from "../topBar/TopBar.tsx";
import ContactList from "../contactList/ContactList.tsx";
import BottomBar from "../bottomBar/BottomBar.tsx";

function App() {
    return (
        <div className="App">
            <TopBar/>
            <ContactList/>
            <BottomBar/>
        </div>
    )
}

export default App;