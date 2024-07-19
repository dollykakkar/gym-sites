import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import { Homepage } from "./Compo/Homepage";
import { Dashboard } from "./Components/Dashboard";
function App() {
  return (
    <div className='flex'>
    <Router>
    <SideBar/>
    {/* <Homepage/> */}
    {/* <AdminInfo/> */}
    {/* <Payment/> */}
    {/* <ActiveMember/>  */}
    {/* <ActiveCoach/> */}
    {/* <AddEquipment/> */}
    {/* <SalesReport/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <Registration/> */}
        <Routes>
          <Route path='/admin' element={<AdminInfo/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/members' element={<ActiveMember/>}/>
          <Route path='/coach' element={<ActiveCoach/>}/>
          <Route path='/sales' element={<SalesReport/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/equipment' element={<AddEquipment/>}/>
          <Route path='/plan' element={<Plan/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
