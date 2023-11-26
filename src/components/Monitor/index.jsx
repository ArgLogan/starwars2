import React, { useState, useEffect } from 'react';
import './monitor.css'

const Monitor = () => {
  const [url, setUrl] = useState('');
  const [waitTime, setWaitTime] = useState(180000);
  const [retryCount, setRetryCount] = useState(5);
  const [log, setLog] = useState('');

  const addToLog = (message) => {
    setLog((prevLog) => `${prevLog}\n${message}`);
  };

  const makeRequest = async () => {
    addToLog(`Inicio de la petición - Intento ${retryCount > 0 ? retryCount : 'único'}`);
    try {
      const response = await fetch(url);
      addToLog(`Respuesta del servidor: ${response.status} - ${response.statusText}`);
      if (response.status === 200) {
        // Si la respuesta es 200, esperar y hacer otra petición
        addToLog(`Esperando ${waitTime} ms para el próximo intento`);
        setTimeout(makeRequest, waitTime);
      } else {
        // Si no es 200, reducir los reintentos y esperar 30 segundos si quedan reintentos
        if (retryCount > 0) {
          addToLog(`Reintentando en 30 segundos - Reintentos restantes: ${retryCount}`);
          setRetryCount(retryCount - 1);
          setTimeout(makeRequest, 30000);
        } else {
          // Si se agotan los reintentos, informar error
          addToLog(`Error: Se agotaron los reintentos. Respuesta del servidor: ${response.status} - ${response.statusText}`);
        }
      }
    } catch (error) {
      addToLog(`Error durante la petición: ${error.message}`);
    }
  };

  const handleButtonClick = () => {
    // Limpiar el log al hacer clic en el botón
    setLog('');
    // Iniciar la solicitud al hacer clic en un botón, por ejemplo
    makeRequest();
  };

  return (
    <div className='container2'>
      <label>
        Dirección web:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <br />
      <label>
        Tiempo de espera (ms):
        <input type="number" value={waitTime} onChange={(e) => setWaitTime(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Cantidad de reintentos:
        <input type="number" value={retryCount} onChange={(e) => setRetryCount(Number(e.target.value))} />
      </label>
      <br />
      <button onClick={handleButtonClick}>Realizar solicitud</button>
      <div>
        <h3>Log:</h3>
        <pre>{log}</pre>
      </div>
    </div>
  );
};

export default Monitor;

