import "../utils/css/style.css"


import HomeBanner from "../components/HomeBanner"
import Subside from "../components/Subside"


function makeAboutPage() {
    return (
    <main class="about-container">
        <HomeBanner />
        <div class="about-subside">
          <Subside
            name='Fiabilité'
            description={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
          />
          <Subside
            name='Respect'
            description={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
          />
          <Subside
            name='Service'
            description={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
          />
          <Subside
            name='Sécurité'
            description={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
          />
        </div>
        </main>
        )
}
export default makeAboutPage ;