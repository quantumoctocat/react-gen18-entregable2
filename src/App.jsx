import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'

function App() {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [weather, setWeather] = useState("")
  const [temperature, setTemperature] = useState(0)
  const [place, setPlace] = useState("")

  const savePositionToState = (position) => {
    setLat(position.coords.lat)
    setLon(position.coords.lon)
  }

  const fetchWeather = async () => {
    try {
      await navigator.geolocation.getCurrentPosition(
        savePositionToState
      )
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7eb4ca6bc754db24656fb481f211c7ce&units=metric`
      )
      setTemperature(res.data.main.temp)
      setPlace(res.data.name)
      setWeather(res.data.weather[0].main)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [lat, lon])

  return (
    <div className="dataW_container">
      <div className="dataW">
        <h1>{place}</h1>
        <h2>{Math.floor(temperature)}ºC - {Math.floor((temperature * 9 / 5) + 32)}ºF</h2>
        <h2>{weather}</h2>
        <h3><a href="https://github.com/quantumoctocat/react-gen18-entregable2"><strong>--- Code at GitHub ---</strong></a></h3>
      </div>
    </div>
  )
}

export default App
