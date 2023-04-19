import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const Reloader = () => {
    const element = <FontAwesomeIcon icon={faSpinner}  style={{color: "#ffffff",}} />

    return ( 
        <div className="reloader">
            <section className="loader--container">
                <div className="loader">
                    <section className="load">{element}</section>
                </div>
            </section>
        </div>
    );
}
 
export default Reloader;