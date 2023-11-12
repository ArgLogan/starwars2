import './principal.css'

import Card from '../Card'

const Principal =(props)=>{
    const {people,muestraCard} = props
    console.log(people)
    return (<div className="cont-principal">
        
        {muestraCard && people.results.map((person,index)=>
        <Card
            key ={index}
            name={person.name}
            nacimiento ={person.birth_year}
            planeta = {person.homeworld}
        />)} 
    

    </div>
    )
}
export default Principal