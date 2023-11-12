import { useState } from 'react'
import { fetchDataFromAPI } from '../../assets/starwarsHook.js'
import './card.css'


const Card=(props)=>{
    const{name, planeta, nacimiento } = props
    const[planet,actPlanet] = useState("")

    //actPlanet(fetchDataFromAPI(planeta))
    console.log(planet)
    return(
        <div className="cont-card">
           <h1>{name}</h1>
           <p>{nacimiento}</p>
           {/* <p>{planet}</p> */}
        </div>
    )
}
export default Card