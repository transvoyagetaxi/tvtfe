import { useEffect, useState } from 'react'

const TIME_SLOTS = ['00:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00']

const formatTime = value => {
  if (!value) return ''
  const [hourValue, minute] = value.split(':')
  const hour = Number(hourValue)
  const suffix = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minute} ${suffix}`
}

const formatPickupDateTime = (date, time) => {
  if (!date && !time) return 'Not specified'
  if (!date) return formatTime(time)
  if (!time) return date
  return `${date} at ${formatTime(time)}`
}

const today = () => {
  const date = new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 10)
}

const EMPTY_FORM = {
  name: '', phone: '', pickup: '', pickupDate: '',
  pickupTime: '', dropoff: '', wheelchair: false, notes: ''
}

const QuickBookModal = ({ open, onClose }) => {
  const [form, setForm] = useState(EMPTY_FORM)

  useEffect(() => {
    if (open) setForm(EMPTY_FORM)
  }, [open])

  if (!open) return null

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const setPickupTime = pickupTime => setForm(prev => ({ ...prev, pickupTime }))

  const handleSubmit = e => {
    e.preventDefault()
    const pickupDateTime = formatPickupDateTime(form.pickupDate, form.pickupTime)
    const body = [
      'Hello,', '',
      'Thank you for choosing Trans Voyage Taxi.', '',
      'Booking request:',
      '--------------------------------------------------',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Pickup address: ${form.pickup}`,
      `Pickup date & time: ${pickupDateTime}`,
      `Dropoff address: ${form.dropoff}`,
      `Wheelchair required (yes/no): ${form.wheelchair ? 'yes' : 'no'}`,
      'Notes:', form.notes || 'N/A', '',
      'Please note: Your trip is not confirmed until a Trans Voyage Taxi representative calls you to confirm.',
      '', 'Thank you,', 'Trans Voyage Taxi'
    ].join('\n')

    const mailto = `mailto:bookings@transvoyagetaxi.com?subject=${encodeURIComponent('Booking request')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    onClose()
  }

  return (
    <div className="qb-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="qb-modal" onClick={e => e.stopPropagation()}>
        <header className="qb-header">
          <div>
            <p className="kicker">Quick booking</p>
            <h3>Book A Ride</h3>
            <p className="muted small">We respond quickly to confirm your trip details.</p>
          </div>
          <button className="qb-close" onClick={onClose} aria-label="Close">×</button>
        </header>

        <form className="qb-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
          <label>Phone<input name="phone" value={form.phone} onChange={handleChange} required /></label>
          <label>Pickup address<input name="pickup" value={form.pickup} onChange={handleChange} required /></label>
          <div className="datetime-grid">
            <label>Pickup date<input type="date" name="pickupDate" value={form.pickupDate} min={today()} onChange={handleChange} /></label>
            <label>Pickup time<input type="time" name="pickupTime" value={form.pickupTime} step="900" onChange={handleChange} /></label>
          </div>
          <div className="time-slot-group" aria-label="Pickup time slots">
            {TIME_SLOTS.map(slot => (
              <button
                type="button"
                key={slot}
                className={`time-slot ${form.pickupTime === slot ? 'selected' : ''}`}
                onClick={() => setPickupTime(slot)}
              >
                {formatTime(slot)}
              </button>
            ))}
          </div>
          <label>Dropoff address<input name="dropoff" value={form.dropoff} onChange={handleChange} required /></label>
          <label className="checkbox">
            <input type="checkbox" name="wheelchair" checked={form.wheelchair} onChange={handleChange} />
            Requires wheelchair-accessible vehicle
          </label>
          <label>Notes<textarea name="notes" value={form.notes} onChange={handleChange} /></label>

          <div className="qb-actions">
            <button type="button" className="tv-book secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="tv-book">Send booking email</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuickBookModal
