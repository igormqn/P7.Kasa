import "../utils/css/style.css"

import Card from "../components/Card"
import Banner from "../components/HomeBanner"

function makeHome() {
          return (
<main class="home-container">
    <div class="home-block">
       < Banner />
       <div class="card-home">
        <Card />
       </div>
    </div>
</main>
          )
}

export default makeHome;