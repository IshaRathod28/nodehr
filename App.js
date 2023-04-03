import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import Addemp from './components/Addemp';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Hr from './components/Hr';
import Location from './components/Location'
import Updateemp from './components/Updateemp';
// import Updatehr from './components/updatehr';
import Updatehr from './components/Updatehr';
import Updatelocation from './components/Updatelocation';
import Addlocation from './components/Addlocation';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Employee/>} />
      <Route path="/addemp" element={<Addemp/>} />
      <Route path='/hr' element={<Hr/>}/>
      <Route path='/location' element={<Location/>}/>
      <Route path='/updateemp' element={<Updateemp/>}/>
      <Route path='/updatehr' element={<Updatehr/>}/>
      <Route path='/updatelocation' element={<Updatelocation/>}/>
      <Route path='/addlocation' element={<Addlocation/>} />
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
