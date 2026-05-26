import { useEffect, useRef, useState } from 'react'

const FACTS = [
  'Denver is nicknamed the "Mile High City" because its elevation is one mile above sea level.',
  'Taxi travel has been part of Denver since the early 1900s.',
  'A typical city taxi trip is about 5-8 miles - perfect for errands and airport runs.',
  'Trans Voyage Taxi offers ADA-compliant vehicles for riders who need wheelchair-accessible transport.',
  'Booking ahead for airport trips reduces wait time and keeps pickups on schedule.',
  'Denver gets more than 200 days of sunshine each year - pack sunglasses.',
  'Friendly drivers know local shortcuts that can save time when traffic is heavy.',
  'Electric taxi pilots existed in the early 1900s, so EV taxis are not new.'
]

const randomIndex = except => {
  let i = Math.floor(Math.random() * FACTS.length)
  if (except != null && FACTS.length > 1) {
    while (i === except) i = Math.floor(Math.random() * FACTS.length)
  }
  return i
}

const FunWidget = () => {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * FACTS.length))
  const [fade, setFade] = useState(false)
  const fadeTimer = useRef(null)

  const advance = (delay = 200) => {
    if (fadeTimer.current) clearTimeout(fadeTimer.current)
    setFade(true)
    fadeTimer.current = setTimeout(() => {
      setIndex(i => randomIndex(i))
      setFade(false)
    }, delay)
  }

  useEffect(() => {
    const id = setInterval(() => advance(300), 7000)
    return () => {
      clearInterval(id)
      if (fadeTimer.current) clearTimeout(fadeTimer.current)
    }
  }, [])

  return (
    <aside className="fun-widget card" aria-live="polite">
      <div className={`fun-fact ${fade ? 'fade' : ''}`}>
        <div className="fact-emoji">🚕</div>
        <div className="fact-text">{FACTS[index]}</div>
      </div>
      <div className="fun-controls">
        <button className="btn ghost" onClick={() => advance(200)} aria-label="Next fun fact">Next fact</button>
      </div>
    </aside>
  )
}

export default FunWidget
