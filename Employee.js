import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, link } from 'react-router-dom';
import Navbar from './Navbar';


const Employee = () => {
    const [empdata, setEmpdata] = useState([]);
//    const [pagerefresd, setpagerefresd] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        showemployee();
    }, []);

    useEffect(() => {
        showemployee();
    },
    // [pagerefresd]
    )    

    console.log(empdata)

    // const handleupdate = async(eid) => {
    //     try{
    //     const res = await axios.get("http://localhost:8001/update",{params:{eid}})
    //     console.log("update click", eid);
    //     console.log(res.data);
    //     navigate('/updateemp')

    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }

    const handleupdate =  (eid) => {
        localStorage.setItem("tempempid",eid);
        navigate('/updateemp');
    }

    const showemployee = async() => {
        try {
            const res = await axios.get("http://localhost:8001/employee")
            console.log(res.data);
            setEmpdata(res.data);
            console.log("empdat", empdata);
        }
        catch (err) {
            console.log(err);
        }

    }


    const handledelete = async (eid) => {
        try {
            const res = await axios.delete("http://localhost:8001/empdelete",{params:{eid}})
            console.log(res.data);
            // setpagerefresd(!pagerefresd);
        }
        catch (err) {
            console.log(err);
        }

    }



    return (

        <>
        
        <Navbar/>
        <div style={{margin:"30px" ,float:"right"}}>
        <button className='btn btn-success' style={{width: "fit-content" } } onClick={() => {navigate("/addemp")}} >ADD EMPLOYEE</button>
        </div>
      
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Employee ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Contactno</th>
                        <th>Homeaddress</th>
                        <th>Worklocation</th>
                        <th>Email</th>
                        <th>Actions</th>
                        <th> </th>
                    </tr>
                </thead>
                {empdata ? <>
                    {empdata.map((item, index) => (
                        <tbody>
                            <tr>
                                <td>{item.eid} </td>
                                <td> {item.firstname}</td>
                                <td>{item.lastname} </td>
                                <td>{item.contactnumber} </td>
                                <td> {item.homeaddress}</td>
                                <td> {item.worklocation}</td>
                                <td> {item.email}</td>
                                <td style={{display: "flex"}}> 
                                
                                <button className='btn btn-primary' style={{marginRight : "10px"}}  
                                     onClick={(e) => {handleupdate(item.eid)}} >UPDATE</button> 


                                     <button className='btn btn-danger' 
                                     onClick={(e) => {handledelete(item.eid)}} >DELETE</button>
                                </td>

                            </tr>
                        </tbody>
                    )
                    )
                    }
                </>
                :
                    <>
                        <tr> <td>No Data</td></tr>
                    </>
                }
            </table>
        </>
    )
}

export default Employee
