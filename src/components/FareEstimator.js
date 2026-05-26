import { useState } from 'react'
import { Link } from 'react-router-dom'

const BASE_FARE = 3.50
const PER_MILE = 2.80
const AIRPORT_FEE = 5.03

const fmt = n => n.toFixed(2)

const FareEstimator = () => {
  const [miles, setMiles] = useState(8)
  const [diaTrip, setDiaTrip] = useState(false)

  const base = BASE_FARE + miles * PER_MILE + (diaTrip ? AIRPORT_FEE : 0)
  const low = base
  const high = base + miles * 0.32 + 2.5

  return (
    <div className="fare-estimator">
      <div className="fare-left">
        <p className="kicker">Fare estimator</p>
        <h3>Estimate your metered fare</h3>
        <p className="muted">For city rides outside the flat-rate DIA zones. Adjust the slider to your estimated trip distance.</p>

        <div className="fare-slider-group">
          <div className="fare-slider-label">
            <span>Trip distance</span>
            <span className="fare-miles-val">{miles} mi</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            step="0.5"
            value={miles}
            onChange={e => setMiles(Number(e.target.value))}
            className="fare-slider"
            style={{ '--val': `${((miles - 1) / 49) * 100}%` }}
            aria-label="Trip distance in miles"
          />
          <div className="fare-slider-ticks">
            <span>1 mi</span>
            <span>25 mi</span>
            <span>50 mi</span>
          </div>
        </div>

        <label className="checkbox fare-airport-toggle">
          <input type="checkbox" checked={diaTrip} onChange={e => setDiaTrip(e.target.checked)} />
          Include $5.03 DIA airport access fee
        </label>
      </div>

      <div className="fare-right">
        <div className="fare-result-card">
          <div className="fare-result-label">Estimated fare</div>
          <div className="fare-range">
            <span className="fare-amount">${fmt(low)}</span>
            <span className="fare-dash"> – </span>
            <span className="fare-amount">${fmt(high)}</span>
          </div>
          <div className="fare-breakdown muted">
            $3.50 base &nbsp;+&nbsp; {miles} mi × $2.80
            {diaTrip ? <>&nbsp;+&nbsp;$5.03 airport fee</> : null}
          </div>
          <div className="fare-note muted">
            Upper end accounts for slow traffic and waiting time ($0.40/min under 15&nbsp;mph).
          </div>
        </div>

        <p className="fare-disclaimer muted">
          Estimates only — actual fare depends on live traffic, route, and detours.
          Flat-rate DIA zones have fixed pricing. <Link to="/services" className="text-link">See full rates →</Link>
        </p>
      </div>
    </div>
  )
}

export default FareEstimator
