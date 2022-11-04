import { Link } from 'react-router-dom';

import "../utils/css/style.css"

function Error404() {
    return (
        <main class="error404-container">
        <div class='error404-block'>
            <h1 class='error404-text'>404</h1>
            <h2 class='error404-text2'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/home' class='back-page'><p>Retourner sur la page d’accueil</p></Link>
        </div>
        </main>
    )
}
export default Error404 ;