import './welcomeScreen.scss'
import startMenu from './img/startMenu.svg'

const WelcomeScreen = () => {
    return (
        <div className="container">
            <div className="welcome">
                <img src={startMenu} alt="start menu" className="welcome__img"/>
                <h2 className="welcome__title">Connect easily with your family and friends over countries</h2>
                <a href="" className="welcome__terms">Terms & Privacy Policy</a>
                <button className="welcome__start">Start Messaging</button>
            </div>
        </div>
    );
};

export default WelcomeScreen;