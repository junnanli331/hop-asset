import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'
import Hoptek from './hoptek.png'
import { EmployeesMerg }from './Employees'
import Labtop from './Labtop'
import Keyboard from './Keyboard'
import Mouse from './Mouse'
import Trackpad from './Trackpad'
import history from './historyDB.json'




const Dashboard = () => {
    const [activeComp, setActiveComp] = useState('Employees')

    const handleComp = (compName) => {
        setActiveComp(compName);
    }
    const navigate = useNavigate();
    const handlePage = () => {
        navigate('/')
    }
    return (
    <div>
        <div className = 'appTitle'>
        <img src ={Hoptek} alt = ""/>
        <h1>HopAsset</h1>
        </div>
        <nav>
        <ul >
            <li><button className = 'employeeBtn' onClick= {() => handleComp('Employees')}>Employees</button></li>
            <li><button className = 'title'>Asset:</button></li>
            <li><button className = "labtop" onClick={() => handleComp('Labtop')}>Labtop</button></li>
            <li><button className = "keyboard" onClick = {() => handleComp('Keyboard')}>Keyboard</button></li>
            <li><button className = "mouse" onClick = {() => handleComp('Mouse')}>Mouse</button></li>
            <li><button className = 'trackpad' onClick = {() => handleComp('Trackpad')}>Trackpad</button></li>
            <button className = 'logout' onClick = {handlePage}>Logout</button>
            
        </ul>
        </nav>
        <div className = "display">
            {activeComp === "Employees" &&  <EmployeesMerg/>}
            {activeComp === "Labtop" && <Labtop/>}
            {activeComp === 'Keyboard' && <Keyboard/>}
            {activeComp === 'Mouse' && <Mouse/>}
            {activeComp === 'Trackpad' && <Trackpad/>}
        </div>
        
    </div>
    )
}

export default Dashboard;

