import './topBar.scss'
import '../../styles/base.scss'
import plusIcon from './icons/plus.svg'


const TopBar = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="header__title">Contacts</div>
                <img src={plusIcon} alt="add contact" className="header__plus-icon"/>
            </header>
        </div>
    )
}

export default TopBar;