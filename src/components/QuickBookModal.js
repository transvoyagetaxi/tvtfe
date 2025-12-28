import { useState } from 'react'

const QuickBookModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    datetime: '',
    dropoff: '',
    wheelchair: false,
    notes: ''
  })

  if (!open) return null

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const body = [
      'Hello,',
      '',
      'Thank you for choosing Trans Voyage Taxi.',
      '',
      'Booking request:',
      '--------------------------------------------------',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Pickup address: ${form.pickup}`,
      `Pickup date & time: ${form.datetime}`,
      `Dropoff address: ${form.dropoff}`,
      `Wheelchair required (yes/no): ${form.wheelchair ? 'yes' : 'no'}`,
      'Notes:',
      form.notes || 'N/A',
      '',
      'Please note: Your trip is not confirmed until a Trans Voyage Taxi representative calls you to confirm.',
      '',
      'Thank you,',
      'Trans Voyage Taxi'
    ].join('\n')

    const mailto = `mailto:info@transvoyagetaxi.com?subject=${encodeURIComponent('Booking request')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    onClose()
  }

  return (
    <div className="qb-overlay" role="dialog" aria-modal="true">
      <div className="qb-modal">
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
          <label>Pickup date & time<input name="datetime" value={form.datetime} onChange={handleChange} placeholder="YYYY-MM-DD HH:MM" /></label>
          <label>Dropoff address<input name="dropoff" value={form.dropoff} onChange={handleChange} required /></label>
          <label className="checkbox"><input type="checkbox" name="wheelchair" checked={form.wheelchair} onChange={handleChange} /> Requires wheelchair-accessible vehicle</label>
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
