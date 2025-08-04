import './storiesMenu.scss'

import photo1 from '../contactList/img/photo1.svg'
import photo2 from '../contactList/img/photo2.svg'
import storiesPlus from './icons/storiesPlus.svg'

const StoriesMenu = () => {
    return (
        <>
        <div className="container">
            <div className="stories">
                <div className="stories__add">
                    <button className="stories__add-button">
                        <img src={storiesPlus} alt=""/>
                    </button>
                    <div className="stories__add-text">Your Story</div>
                </div>
                <ul className="stories__list">
                    <li className="stories__list-item">
                        <img src={photo1} alt=""/>
                        <div className="stories__list-item-name">Midala Huera</div>
                    </li>
                    <li className="stories__list-item">
                        <img src={photo2} alt=""/>
                        <div className="stories__list-item-name">Salsabila Akira</div>
                    </li>
                </ul>
            </div>
        </div>
            <div className="divider"></div>
        </>
    )
}

export default StoriesMenu;