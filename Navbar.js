import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
    return (<>
        <div>
            <div style ={{height: '100px', backgroundColor:'black'}} className='d-flex justify-content-between h-25 py-3'>
                <div style={{  fontSize: '46PX', color: 'WHITE', marginLeft: '50PX'}}>HR CRUD </div>
                <div> <button style={{margin:"20px"}} class="btn btn-success" onClick={() => { navigate('/') }}> Employee </button>
                    <button style={{margin:"20px"}} class="btn btn-success" onClick={() => { navigate('/hr') }}> HR </button>
                    <button style={{margin:"20px"}} class="btn btn-success" onClick={() => { navigate('/location') }}> Office </button></div>
            </div>

           
        </div>


    </>
    )
}

export default Navbar
