import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "62c9c7de2f30407cea2e58aeceb69d29"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric` 

    const apiWeather = await axios.get(url)
    const api5Days = await axios.get(url5Days)

    setWeather(apiWeather.data)
    setWeather5Days(api5Days.data)

  }

  return (
    <div className='container'>
      <h1>APP - Previsão do Tempo</h1>

      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather}/>}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days}/>}

    </div>
  )
}

export default App
