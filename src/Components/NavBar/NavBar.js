import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(){
    return (

<div>
      <ul className="nav justify-content-end bg-dark">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to='/'>Productos</NavLink>
            </li>     
            <li className="nav-item">
                <NavLink className="nav-link" to='/category/jrpg'>JRPG</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/category/arpg'>ARPG</NavLink>
            </li>
            
                <NavLink className="nav-link" to='/cart'>
                
                    <CartWidget />
                
                 </NavLink>
            
        </ul>
    </div>
    
    )
}

export default NavBar;