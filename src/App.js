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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Protected } from "./Components/Protected";

function App() {
  return (
    <div className='flex'>
    <Router>  
          <ToastContainer/>
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
          
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/admin' element={<Protected component={AdminInfo} />}/>
          <Route path='/payment' element={<Protected component={Payment} />}/>
          <Route path='/members' element={<Protected component={ActiveMember} />}/>
          <Route path='/coach' element={<Protected component={ActiveCoach} />}/>
          <Route path='/sales' element={<Protected component={SalesReport} />}/>
          <Route path='/register' element={<Protected component={Registration} />}/>
          <Route path='/equipment' element={<Protected component={AddEquipment} />}/>
          <Route path='/plan' element={<Protected component={Plan} />}/>
          <Route path='/dashboard' element={<Protected component={Dashboard} />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
