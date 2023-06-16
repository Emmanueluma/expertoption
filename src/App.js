import { HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/NotFound'
import React from 'react';
import './index.css'
const App = () => {
    return (  
        <main>
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Home />} />  
                <Route path='/NotFound' element={ <Notfound />} /> 
                <Route path='*' element={ <Notfound />} /> 
            </Routes>
        </HashRouter>
        </main>
     );
}
export default App;