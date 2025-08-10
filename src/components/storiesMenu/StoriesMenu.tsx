import './storiesMenu.scss'
import '../../styles/reset.scss'

import photo1 from '../contactList/img/photo1.svg'
import photo2 from '../contactList/img/photo2.svg'
import storiesPlus from './icons/storiesPlus.svg'

const StoriesMenu = () => {

    const getShortName = (name: string): string => {
        name = name.length > 9 ? name.slice(0, 9) + '...' : name
        return name;
    }

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
                    <li>
                        <button className="stories__list-item">
                            <img src={photo1} alt=""/>
                            <span className="stories__list-item-name">{getShortName('Midala Huera')}</span>
                        </button>
                    </li>
                    <li>
                        <button className="stories__list-item">
                            <img src={photo2} alt=""/>
                            <span className="stories__list-item-name">{getShortName('Salsabila Akira')}</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
            <div className="divider"></div>
        </>
    )
}

export default StoriesMenu;