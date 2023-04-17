import { useState } from 'react';
import Desktop from '../components/Desktop';
const Home = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
        
    })
    const handleChange = (e) =>{
        setFormData(prev => {
            return{
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }


    
    return ( 
        <Desktop 
            formData={formData} 
            setFormData={setFormData}
            handleChange={handleChange}  
        />
    );
}
 
export default Home;