import React,{useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Navbar from "./Navbar";


const Location = () => {
    const[locationdata,setLocationdata] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
      
    locationdisp();
},[])

const handleupdate =  (buildingid) => {
    localStorage.setItem("tempempid",buildingid);
    navigate('/updatelocation');
}

    const locationdisp = async () => {
        try{
            const res = await axios.get("http://localhost:8001/showlocation")
            console.log(res);
            console.log(res.data)
            setLocationdata(res.data);
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <>
    <Navbar/>
    <div>

    <button className='btn btn-success' style={{width: "fit-content" ,float:"right" , margin:"30px"} } onClick={() => {navigate("/addlocation")}} >ADD</button> 

    </div>
        <table class="table">
                <thead class="thead-dark">
            <tr>
                <th>Building ID </th>
                <th>Company Location </th>
                <th>Address </th>
                <th>ZIP Code</th>
                <th>Manager</th>
                <th>Action</th>
            </tr>
            </thead>
       
      
            {locationdata.map((item,index) => {
                return(
                    (<>
                    <tbody>
                            <tr>
                                <td> {item.buildingid} </td>
                                <td> {item.companylocation} </td>
                                <td> {item.address} </td>
                                <td> {item.zipcode}</td>
                                <td> {item.manager} </td>     
                                <td style={{display: "flex"}}> <button className='btn btn-primary' style={{marginRight : "10px"}}  
                                     onClick={(e) => {handleupdate(item.buildingid)}} >UPDATE</button> </td>                          
                            </tr>
                          </tbody>

                        </>
                )
                )

            }) }
  
    
    </table>
    </>
  )
}

export default Location
