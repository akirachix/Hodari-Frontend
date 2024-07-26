import './index.css';
import { NavLink } from 'react-router-dom';
import Inotalogo from '../images/inota.png';
function Navbar(){
    return(
        <div>
             <div id='logo-container'>
         <img id='inota-logo' src={Inotalogo} alt='Logo'/>
         <div id='top-nav'>
            <div id='welcome-text'>
         <p>Welcome <b>Limuru Sacco</b></p>
         </div>
         <div className='help-signout'>
         <p>Help</p>
         <p>SignOut</p>
         </div>
        </div>
        </div>
              <div id='navbar'>
      <ul id="navlist">
        <li>
          <NavLink to="/" className="nav-link" end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/loan-repayment" className="nav-link">
            Loan Repayment
          </NavLink>
        </li>
        <li>
          <NavLink to="/milk-collection" className="nav-link">
            Milk collection
          </NavLink>
        </li>
        <li>
          <NavLink to="/loan-application" className="nav-link">
            Loan Application
          </NavLink>
        </li>
      </ul>
    </div>

        </div>
    );
}
export default Navbar;