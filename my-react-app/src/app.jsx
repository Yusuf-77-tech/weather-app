import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const API_KEY = 'eed47fcabe4b7ac1a04a06e8f0b18616'; // We'll get this soon

  const getWeather = async () => {
    if (!city) return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="App" style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>🌤 Weather App</h2>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && weather.main && (
        <div style={{ marginTop: 20 }}>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
      )}
    </div>
  );
}

export default App

// import { useState } from "react";

// function App(){

//   const [city, setcity] = useState('')
//   const [weather, setWeather] = useState(null)

//   const Apikey = 'eed47fcabe4b7ac1a04a06e8f0b18616'

//   const getweather = async () => {
//     if (!city) return

//     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`)
//     const data = res.json()
//     setWeather(data)

//   }

//   return(
//     <div className="App" style={{fontFamily : "sans-serif" , padding : "20px"}}>
//       <h2>Weather App</h2>
//       <input type="text" 
//       value={city}
//       onChange={(e) => setcity(e.target.value)}
//       />
//       <button onClick={getweather}>Get weather</button>
//       {weather && weather.main &&(
//         <div style={{marginTop : "20"}}>
//           <h3>{weather.name}</h3>
//           <p>Teperature : {weather.main.temp}</p>
//           <p>{weather.weather[0].description}</p>
//           <img
//             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//             alt="weather-icon"
//           />

//         </div>
//       )}



//     </div>
//   )


// }

// export default App