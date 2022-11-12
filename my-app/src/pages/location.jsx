import { useParams } from 'react-router-dom';
import starFull from "../assets/images/star_rate-full.png" ;
import Data from '../Data/Data';
/*import {Navigate} from 'react-router-dom'*/ 
import starEmpty from "../assets/images/star_rate-empty.png" ;
import "../utils/css/style.css";

import Images from "../components/multiImages"
import Subside from "../components/Subside";
import Error from "./Error";


function Location() {
    const { id } = useParams();
    const rang = [1, 2, 3, 4, 5];
    const findPlace = Data.find((place) => place.id === id);
    if (!findPlace) {
      return <Error />
      /*  && (
          <Navigate to="/" replace={true} />
        )}*/
    }
    
      return (
      <main class="location-container">
        <div class="multiImages-block">
          <Images pictures={findPlace.pictures} />
        </div>
        <section class="location-info" >
          <div class="location-block">
            <div class="location"> 
              <h1 class='location-title'>{findPlace.title}</h1>
              <h2 class='location-find'>{findPlace.location}</h2>
              <ul class='location-tags'>
                {findPlace.tags.map((tags, index) => (
                    <li class="tags-list" key={`${index}-${tags}`}>{tags}</li>
                  ))}
              </ul>
            </div>
  
            <div class='account-container'>
              <div className='account-block'>
                <ul className='account-ul'>
                  <li className='account-li'>{findPlace.host.name}</li>
                  <li><img src={findPlace.host.picture} class='account-img' alt={`Portrait de ${findPlace.host.name}`} className='account-img' /></li>
                </ul>
              </div>
              <div className='account-rating'>{rang.map((rangElement) =>
                findPlace.rating >= rangElement ? <span class='account-star-block' key={rangElement.toString()}> <img src={starFull} alt='' className='account-star-img' /></span> : <span class='account-star-block' key={rangElement.toString()}><img src={starEmpty} alt='' className='account-star-img' /></span>
              )}
              </div>
            </div>
          </div>
          <div className='subside-place'>
            <Subside
              name='Description'
              description={<p>{findPlace.description}</p>} />
  
            <Subside
              name='Équipements'
              description={<ul className="sub-equipments-ul">{findPlace.equipments.map((equipments, index) => (
                <li key={`${index}-${equipments}`}>{equipments}</li>
              ))}</ul>} />
          </div>
        </section>
      </main>
    )}
export default Location ;