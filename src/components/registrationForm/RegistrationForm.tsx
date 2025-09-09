import './registrationForm.scss'

import PhoneInput from 'react-phone-input-2'
import {useState} from "react";


const RegistrationForm = () => {

    const [phone, setPhone] = useState('')
    
    return (
        <div className="container">
            <div className="registration">
                <h2 className="registration__header">Enter Your Phone Number</h2>
                <p className="registration__descr">Please confirm your country code and enter <br/> your phone number</p>
                <PhoneInput country={'us'} value={phone} onChange={setPhone}/>
            </div>
        </div>
    );
};

export default RegistrationForm;