import './topBar.scss'
import '../../styles/base.scss'
import plusIcon from '../topBar/icons/plus.png'


const TopBar = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="contacts">Contacts</div>
                <img src={plusIcon} alt="add contact" className="plus-icon"/>
            </header>
        </div>
    )
}

export default TopBar;