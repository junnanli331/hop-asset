import React from 'react'
import {useState, useEffect, Component} from 'react'
import './emp.css'
import asset from './assetDB.json'
import employee from './employeeDB.json'

console.log(JSON.parse(employee))




export const Employees = () => {
    return (
      <div className="employeeInfo">
        <table>
          <thead>
            <tr className="header">
              <th>Employee Name</th>
              <th>Asset Name</th>
              <th>Serial Number</th>
              <th>Date Assigned</th>
            </tr>
          </thead>
          <tbody>
            {employee &&
              employee.map((emp) => {
                return (
                  <React.Fragment key={emp.id}>
                    <tr className="name">
                      <td>{emp.EmployeeName}</td>
                      <td colSpan="3">
                        {emp.EmployeeName} is holding {emp.Assets.length} assets
                      </td>
                    </tr>
                    {emp.Assets &&
                      emp.Assets.map((ass, index) => {
                        return (
                          <tr key={`${index}`}>
                            <td></td>
                            <td>{ass.AssetName}</td>
                            <td>{ass.SerialNumber}</td>
                            <td>{ass.DateAssigned}</td>
                          </tr>
                        );
                      })}
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  };
  
//EmployeeName, AssetName, Serial# can not be empty, if empty placeholder turn red
//if date entered is earlier than current date, set to current date  $
// if serial# not found in assetDB.json, fail to add, show "Item doesn't exist"  $
// if serial# found in employeeDB.json holding by someone else, fail show"holding by someone else", $
// holding by the employeeName display "record exist" 
// if found the employee, add data
//Find Employee in Json, if EmployeeName not found create one, add data
    function Add(validName, valueExist, valueConflict, EName, Aname, SNumber, date) {
      const [updatedEmployees, setUpdatedEmployees ]= useState([])
      if (valueConflict || !valueExist) {
        alert("!!!")
      } else {
      if (!validName) {
        const newData = {
          EmployeeName: EName,
          Assets: [
            {
              AssetName: Aname,
              SerialNumber: SNumber,
              DateAssigned: date,
            },
          ],
        };
        setUpdatedEmployees ( [...employee, newData])
      
      } else {
        const employeeIndex = employee.findIndex(
          (e) => e.EmployeeName === EName
        );
        const updatedAssets = [...employee[employeeIndex].Assets,
          {
            AssetName: Aname,
            SerialNumber: SNumber,
            DateAssigned: date,
          },
        ];
         setUpdatedEmployees([...employee])
        updatedEmployees[employeeIndex] = {
          ...updatedEmployees[employeeIndex],
          Assets: updatedAssets,
        };
       
      }
    }
    return updatedEmployees
    }

    

     export const EmployeeFunction = () => {
        const [empName, setEmpName] = useState('')
        const [assetName, setAssetName] = useState('')
        const [serialNumber, setSerialNumber] = useState('')
        const [date, setDate] = useState('' )
        const[employeeData, setEmployeeData] = useState(employee)

      // employeeDB.json data
      
        const handleEmpName = (name) => {
            setEmpName(name)
        }
        const handleAssetName = (name) => {
            setAssetName(name)
        }
        const handleSerialNumber = (number) => {
            setSerialNumber(number)
        }
        const handleDate = (date) => {
            setDate(date)
        }
        //  // check whether the asset exist in assetDB.json
          const  valueExist = asset && Object.values(asset).some(obj => obj.SrialNumber === serialNumber)
        //  //check whether the SNumber is holding by someone else
          const valueConflict = employee && Object.values(employee).some(obj => (obj.Assets).some(obk => obk.SerialNumber=== serialNumber ))
        //  // check whether the Employee Name exist 
          const validName = employee && Object.values(employee).some(obj => (obj.EmployeeName === empName))
        //  // check Date format, if not assign current date
        //  const dateFormat = Date.parse(date)
        //  if (date <= new Date() || isNaN(dateFormat)) {
        //      setDate(new Date())
        //  }
   
        return (
            <div>
                <ul className = "infoBox">
                <li>
                <label>Employee Name: </label>
                <input placeholder='eg:John Smith' onChange={(e) => (handleEmpName(e.target.value))}></input>
                </li>
                <li>
                <label>Asset Name: </label>
                <input placeholder="eg:MacBook Pro 13\'" onChange={(e) => (handleAssetName(e.target.value))}></input>
                </li>
                <li>
                <label>Serial number: </label>
                <input placeholder='eg:1234567' onChange = {(e) => (handleSerialNumber(e.target.value))}></input>
                </li>
                <li>
                <label>Date Assigned: </label>
                <input placeholder='eg:1960-03-31' onChange = {(e) => (handleDate(e.target.value))}></input>
                </li>
                </ul>

                <ul className = "func">
                    <li><button className = "search">Search</button></li>
                    <li><button className = "add" onClick={() => {
                     
                        setEmployeeData(Add(validName, valueExist, valueConflict, empName, assetName, serialNumber, date))
                      
                    }}>Add</button></li>
                    <li><button className = "delete">Delete</button></li>
                    <li><button className = "modify">Modify</button></li>
                </ul>
            </div>

        )
    }
    
    export  const  EmployeesMerg = () => {
        return (
            <>
            <EmployeeFunction/>
            <Employees/>

           
            </>
        )
    }
    