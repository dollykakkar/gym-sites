import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route,Routes,Link} from "react-router-dom";
import SideBar from './Components/SideBar';
import Payment from './Components/Payment';
import AdminInfo from './Components/AdminInfo';
import ActiveMember from './Components/ActiveMember';
import ActiveCoach from './Components/ActiveCoach';
import AddEquipment from './Components/AddEquipment';
import SalesReport from './Components/SalesReport';
import Login from './Components/Login';
import Register from './Components/Register';
import Registration from './Components/Registration';
import Plan from './Components/Plan';
function App() {
  return (
    <div className="App">
    <Router>
    {/* <AdminInfo/> */}
    {/* <Payment/> */}
    <SideBar/>
    {/* <AddEquipment/> */}
    {/* <ActiveMember/> */}
    {/* <ActiveCoach/> */}
    {/* <SalesReport/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <Registration/> */}
        <Routes>
          <Route path='/admin' element={<AdminInfo/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/members' element={<ActiveMember/>}/>
          <Route path='/coach' element={<ActiveCoach/>}/>
          <Route path='/equipment' element={<AddEquipment/>}/>
          <Route path='/sales' element={<SalesReport/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/plan' element={<Plan/>}/>
          {/* <Route path='/' element={}/> */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
