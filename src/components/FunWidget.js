import { useEffect, useState } from 'react'

const FACTS = [
  'Denver is nicknamed the "Mile High City" because its elevation is exactly one mile above sea level.',
  'The first taxi company in Denver started service in the early 1900s — taxi travel has long been part of the city.',
  'On average, a taxi trip in many U.S. cities covers about 5–8 miles — perfect for short errands and airport rides.',
  'Trans Voyage Taxi offers ADA-compliant vehicles for riders who need wheelchair-accessible transport.',
  'Pro tip: booking ahead for airport trips reduces wait time and ensures on-time pickups during busy hours.',
  'Denver has more than 200 days of sunshine per year — a great city for clear-sky rides!',
  'Drivers often know helpful local shortcuts — a friendly question can save time during busy traffic.',
  'Travel trivia: The world’s first electric taxi fleet ran in the early 1900s — EV taxi tech is older than you think!'
]

const randomIndex = (except) => {
  let i = Math.floor(Math.random() * FACTS.length)
  if (except != null && FACTS.length > 1) {
    while (i === except) i = Math.floor(Math.random() * FACTS.length)
  }
  return i
}

const FunWidget = () => {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * FACTS.length))
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIndex(i => randomIndex(i))
        setFade(false)
      }, 300)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  const next = () => {
    setFade(true)
    setTimeout(() => {
      setIndex(i => randomIndex(i))
      setFade(false)
    }, 200)
  }

  return (
    <aside className="fun-widget card" aria-live="polite">
      <div className={`fun-fact ${fade ? 'fade' : ''}`}>
        <div className="fact-emoji">🚕</div>
        <div className="fact-text">{FACTS[index]}</div>
      </div>

      <div className="fun-controls">
        <button className="btn ghost" onClick={next} aria-label="Next fun fact">Next fact</button>
      </div>
    </aside>
  )
}

export default FunWidget
