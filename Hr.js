import React,{useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Navbar from "./Navbar";


const Hr = () => {
    const[hrdata,setHrdata] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
      
    hrdisp();
},[])

    const hrdisp = async () => {
        try{
            const res = await axios.get("http://localhost:8001/showhr")
            console.log(res);
            console.log(res.data)
            setHrdata(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleupdate =  (eid) => {
        localStorage.setItem("tempempid",eid);
        navigate('/updatehr');
    }

  return (
    <>
    <Navbar/>
         <table class="table" style={{textAlign:"center"}}>
                <thead class="thead-dark">
            <tr>
                {/* <td>Employee ID </td> */}
                <th>EID</th>
                {/* <th>Payroal </th> */}
                <th>Social Security No. </th>
                
                <th>Salary</th>
                <th>&nbsp;</th>
              
            </tr>
            </thead>
       
       
            {hrdata.map((item,index) => {
                return(
                    (
                        <>
                        <tbody>
                            <tr>
                                {/* <td> {hdata.id} </td> */}
                                <td> {item.eid}</td>
                                {/* <td> {hdata.employeepayroal} </td> */}
                                <td> {item.socialsecurityno} </td>
                               
                                <td> {item.salary} </td>   
                                <td style={{textAlign:"center"}}><button className='btn btn-primary' style={{marginRight : "15px"}}  
                                     onClick={(e) => {handleupdate(item.eid)}} >UPDATE</button> 
                                      </td>                          
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

export default Hr
