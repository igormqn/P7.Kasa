


import HeaderLogo from '../assets/images/Kasa_logo.png';
import  { Link }  from 'react-router-dom';

import '../utils/css/style.css'


function makeHeader() {
  return (
    <header>
      <div class="header-container">
         <img src={HeaderLogo} class="header-img" alt="Logo-Header" />
         <nav class='nav-list-container'>
            <li class='header-li'><Link to="/" class="link-to home-link">Accueil</Link></li>
            <li class='header-li'><Link to="/about" class="link-to about-link">À propos</Link></li>
         </nav>
      </div>
    </header>
  )
}

export default makeHeader;