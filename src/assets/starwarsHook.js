
export const fetchDataFromAPI = async (url)=>{
   try{ 
        fetch(url)
            .then(response => response.json())
            .then(datos =>{
                return datos
            } )
            .catch((error) => {
            console.error('Error al obtener los datos:', error)})
    }
    catch (error){
        console.error('Error al obtener los datos:', error)   
    }

};