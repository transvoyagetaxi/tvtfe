import { useEffect, useState } from 'react'

const LAT = 39.7392
const LON = -104.9903
const TZ = 'America/Denver'

const WEATHER_CODES = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail'
}

const LiveWidget = () => {
  const [time, setTime] = useState(() => new Date())
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const tId = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(tId)
  }, [])

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true&timezone=${encodeURIComponent(TZ)}`)
      .then(r => r.json())
      .then(data => {
        if (!mounted) return
        if (data && data.current_weather) {
          setWeather(data.current_weather)
          setError(null)
        } else {
          setError('No weather data')
        }
      })
      .catch(err => {
        if (!mounted) return
        setError('Unable to fetch weather')
        console.error(err)
      })
      .finally(() => mounted && setLoading(false))

    return () => { mounted = false }
  }, [])

  const fmtTime = () => {
    try {
      return time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, timeZone: TZ })
    } catch (e) {
      return time.toLocaleTimeString()
    }
  }

  const renderWeather = () => {
    if (loading) return <div className="muted">Loading...</div>
    if (error) return <div className="muted">{error}</div>
    if (!weather) return null

    const fahrenheit = Math.round((weather.temperature * 9) / 5 + 32)
    const celsius = Math.round(weather.temperature)

    return (
      <div className="weather-row">
        <div className="temp">{fahrenheit}°F</div>
        <div className="code">{WEATHER_CODES[weather.weathercode] || 'Weather'} • {celsius}°C</div>
      </div>
    )
  }

  return (
    <aside className="live-widget card" aria-live="polite">
      <div className="live-top">
        <div>
          <div className="live-time">{fmtTime()}</div>
          <div className="live-label">Denver local time</div>
        </div>
        <div className="live-weather">
          {renderWeather()}
        </div>
      </div>

      <div className="live-footer muted">Tip: Denver weather changes quickly - add a few extra minutes for DIA trips during storms.</div>
    </aside>
  )
}

export default LiveWidget

