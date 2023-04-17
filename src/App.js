import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/NotFound'
import React from 'react';
import './index.css'
const App = () => {
    return (  
        <main>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home />} />  
                <Route path='/NotFound' element={ <Notfound />} /> 
            </Routes>
        </BrowserRouter>
        </main>
     );
}
export default App;