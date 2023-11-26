import { useState,useEffect } from 'react'
import Principal from './components/Principal'
import './App.css'
import Monitor from './components/Monitor'

function App() {
  const[people, actPeople] = useState()
  const[card, habCard] = useState(false)
  const[urls, setUrls] = useState([])



  // useEffect( ()=>{
  //   fetch('https://swapi.dev/api/people/')
  //     .then(response => response.json())
  //     .then(datos =>{
  //       if(datos.length !== 0 ){
  //         actPeople(datos)
  //         habCard(true)
  //       }

  //     } )
  //     .catch((error) => {
  //       console.error('Error al obtener la lista de personajes:', error)})
        
  //  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Supongamos que el archivo JSON se llama data.json y está en la carpeta public
        const response = await fetch('src/assets/urls.json');
        const data = await response.json();
        setUrls(data.url);
      } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className='containner'>
        {/* <Principal
          people = {people}
          muestraCard = {card}
        /> */}
        {urls.map((direccion, index)=><Monitor key = {index} url ={direccion}/>)}
      </div>
  )
}

export default App
