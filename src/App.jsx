import { useState,useEffect } from 'react'
import Principal from './components/Principal'
import './App.css'

function App() {
  const[people, actPeople] = useState()
  const[card, habCard] = useState(false)

  useEffect( ()=>{
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(datos =>{
        if(datos.length !== 0 ){
          actPeople(datos)
          habCard(true)
        }

      } )
      .catch((error) => {
        console.error('Error al obtener la lista de personajes:', error)})
        
   },[])
  return (
      <div className='containner'>
        <Principal
          people = {people}
          muestraCard = {card}
        />
      </div>
  )
}

export default App
