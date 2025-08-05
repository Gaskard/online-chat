import './contactList.scss'
import '../../styles/base.scss'

import '../searchInput/SearchInput.tsx'

import photo1 from './img/photo1.svg'
import photo2 from './img/photo2.svg'
import photo3 from './img/photo3.svg'
import photo4 from './img/photo4.svg'
import photo5 from './img/photo5.svg'
import photo6 from './img/photo6.svg'
import SearchInput from "../searchInput/SearchInput.tsx";

const ContactList = () => {

    return (
        <div className="container">
            <section className="contacts">

                <SearchInput/>

                <ul className="contacts__list">
                    <li className="contacts__item">
                        <img src={photo1} alt="photo"/>
                        <div className="contacts__item-content">
                            <div className="contacts__list-name">Athalia Putri</div>
                            <div className="contacts__list-status">Online</div>
                        </div>
                    </li>
                    <div className="divider"></div>
                    <li className="contacts__item">
                        <img src={photo2} alt="photo"/>
                        <div className="contacts__item-content">
                            <div className="contacts__list-name">Erlan Sadewa</div>
                            <div className="contacts__list-status">Online</div>
                        </div>
                    </li>
                    <div className="divider"></div>
                    <li className="contacts__item">
                        <img src={photo3} alt="photo"/>
                        <div className="contacts__item-content">
                            <div className="contacts__list-name">Midala Huera</div>
                            <div className="contacts__list-status">Online</div>
                        </div>
                    </li>
                    <div className="divider"></div>
                    <li className="contacts__item">
                        <img src={photo4} alt="photo"/>
                        <div className="contacts__item-content">
                            <div className="contacts__list-name">Nafisa Gitari</div>
                            <div className="contacts__list-status">Online</div>
                        </div>
                    </li>
                    <div className="divider"></div>
                    <li className="contacts__item">
                        <img src={photo5} alt="photo"/>
                        <div className="contacts__item-content">
                            <div className="contacts__list-name">Raki Devon</div>
                            <div className="contacts__list-status">Online</div>
                        </div>
                    </li>
                    <div className="divider"></div>
                    <li className="contacts__item">
                        <img src={photo6} alt="photo"/>
                        <div className="contacts__item-content">
                            <div className="contacts__list-name">Salsabila Akira</div>
                            <div className="contacts__list-status">Online</div>
                        </div>
                    </li>
                    <div className="divider"></div>
                </ul>
            </section>
        </div>
    )
}

export default ContactList