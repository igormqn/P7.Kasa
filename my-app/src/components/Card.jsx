import { Link } from 'react-router-dom'
import { Data } from "../Data/Data";

function makeCard() {
    return (
        <ul class="card-container">
          {Data.map (({title, id, cover}) => (
        <li class="card-block" key={id}>
            <Link to ={`location/${id}`}>
                <div class="card-background"></div>
                <h2 class="card-title">{title}</h2>
                <img src={cover} class="card-img" alt={title} />
            </Link>
        </li>
          ))}
        </ul>
    )
}

export default makeCard ;