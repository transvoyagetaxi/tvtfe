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

const today = () => {
  const date = new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toISOString().slice(0, 10)
}

const EMPTY_FORM = {
  name: '', phone: '', pickupAddress: '', dropoffAddress: '',
  deliveryDate: '', deliveryTime: '', itemDescription: '', notes: ''
}

const DeliveryModal = ({ open, onClose }) => {
  const [form, setForm] = useState(EMPTY_FORM)

  useEffect(() => {
    if (open) setForm(EMPTY_FORM)
  }, [open])

  if (!open) return null

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const setDeliveryTime = deliveryTime => setForm(prev => ({ ...prev, deliveryTime }))

  const handleSubmit = e => {
    e.preventDefault()
    const when = form.deliveryDate && form.deliveryTime
      ? `${form.deliveryDate} at ${formatTime(form.deliveryTime)}`
      : form.deliveryDate || (form.deliveryTime ? formatTime(form.deliveryTime) : 'Not specified')

    const body = [
      'Hello,', '',
      'Thank you for choosing Trans Voyage Taxi for your delivery.',  '',
      'Delivery request:',
      '--------------------------------------------------',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Pickup address: ${form.pickupAddress}`,
      `Dropoff address: ${form.dropoffAddress}`,
      `Preferred date & time: ${when}`,
      `Item description: ${form.itemDescription || 'N/A'}`,
      'Notes:', form.notes || 'N/A', '',
      'Please note: Your delivery is not confirmed until a Trans Voyage Taxi representative contacts you.',
      '', 'Thank you,', 'Trans Voyage Taxi'
    ].join('\n')

    const mailto = `mailto:bookings@transvoyagetaxi.com?subject=${encodeURIComponent('Delivery request')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    onClose()
  }

  return (
    <div className="qb-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="qb-modal" onClick={e => e.stopPropagation()}>
        <header className="qb-header">
          <div>
            <p className="kicker">Package delivery</p>
            <h3>Request Delivery</h3>
            <p className="muted small">Same-day and scheduled delivery across Denver metro. We'll confirm your request quickly.</p>
          </div>
          <button className="qb-close" onClick={onClose} aria-label="Close">×</button>
        </header>

        <form className="qb-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
          <label>Phone<input name="phone" value={form.phone} onChange={handleChange} required /></label>
          <label>Pickup address<input name="pickupAddress" placeholder="Where should we pick up the item?" value={form.pickupAddress} onChange={handleChange} required /></label>
          <label>Dropoff address<input name="dropoffAddress" placeholder="Where should we deliver?" value={form.dropoffAddress} onChange={handleChange} required /></label>
          <div className="datetime-grid">
            <label>Preferred date<input type="date" name="deliveryDate" value={form.deliveryDate} min={today()} onChange={handleChange} /></label>
            <label>Preferred time<input type="time" name="deliveryTime" value={form.deliveryTime} step="900" onChange={handleChange} /></label>
          </div>
          <div className="time-slot-group" aria-label="Preferred time slots">
            {TIME_SLOTS.map(slot => (
              <button
                type="button"
                key={slot}
                className={`time-slot ${form.deliveryTime === slot ? 'selected' : ''}`}
                onClick={() => setDeliveryTime(slot)}
              >
                {formatTime(slot)}
              </button>
            ))}
          </div>
          <label>Item description<input name="itemDescription" placeholder="Briefly describe what's being delivered" value={form.itemDescription} onChange={handleChange} /></label>
          <label>Notes<textarea name="notes" value={form.notes} onChange={handleChange} /></label>

          <div className="qb-actions">
            <button type="button" className="tv-book secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="tv-book">Send delivery request</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DeliveryModal
