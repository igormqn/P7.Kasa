import "../utils/css/style.css"
import KasaWhite from "../assets/images/Kasa_White.png"


function createFooter() {
    return (
        <footer className="footer-container">
            <img className="footer-img" src={KasaWhite} alt="Logo Kasa" />
            <p className="footer-text">© 2022 Kasa. All rights reserved</p>
        </footer>
    )
}
export default createFooter ;