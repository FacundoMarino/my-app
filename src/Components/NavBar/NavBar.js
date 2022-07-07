import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar(){
    return (

<div>
      <ul className="nav justify-content-end bg-dark">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Descuentos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Carrito</a>
            </li>
            
                <a className="nav-link">
                
                    <CartWidget />
                
                 </a>
            
        </ul>
    </div>
    
    )
}

export default NavBar;