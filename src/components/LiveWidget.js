import { useEffect, useState } from 'react'

const TZ = 'America/Denver'

const LiveWidget = () => {
  const [time, setTime] = useState(() => new Date())
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [retryKey, setRetryKey] = useState(0)

  useEffect(() => {
    const tId = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(tId)
  }, [])

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    fetch('https://wttr.in/Denver,CO?format=j1')
      .then(r => r.json())
      .then(data => {
        if (!mounted) return
        const cond = data?.current_condition?.[0]
        if (cond) {
          setWeather({ tempF: cond.temp_F, tempC: cond.temp_C, desc: cond.weatherDesc?.[0]?.value || 'Weather' })
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
      .finally(() => { if (mounted) setLoading(false) })
    return () => { mounted = false }
  }, [retryKey])

  const fmtTime = () => {
    try {
      return time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, timeZone: TZ })
    } catch {
      return time.toLocaleTimeString()
    }
  }

  const renderWeather = () => {
    if (loading) return <div className="muted">Loading...</div>
    if (error) return (
      <div className="weather-error">
        <div className="muted" style={{ fontSize: '0.85rem' }}>{error}</div>
        <button className="btn ghost" style={{ padding: '0.25rem 0.6rem', fontSize: '0.82rem', marginTop: '0.3rem' }} onClick={() => setRetryKey(k => k + 1)}>Retry</button>
      </div>
    )
    if (!weather) return null
    return (
      <div className="weather-row">
        <div className="temp">{weather.tempF}°F</div>
        <div className="code">{weather.desc} • {weather.tempC}°C</div>
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
      <div className="live-footer muted">Tip: Denver weather changes quickly — add extra time for DIA trips during storms.</div>
    </aside>
  )
}

export default LiveWidget
