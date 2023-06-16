import {BiX} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
const NotFound = () => {
    const navigator = useNavigate();
    const back = () => {
        navigator('/')
    }
    return ( 
        <div className="not--found">
            <BiX onClick={back} className='cancel'/>
            <h1>this link is broken</h1>
        </div>
    );
}

export default NotFound;