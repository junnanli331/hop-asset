import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
 import Login from './login'
 import Dashboard from './Dashboard'

 const App = () => {
    return(
        <div>
            <Router>
            <Routes>
                <Route path ='/' element={<Login/>} />
                <Route path = '/dashboard' element = {<Dashboard/>}/>
            </Routes>
            </Router>
        </div>
    )
 }

 export default App;