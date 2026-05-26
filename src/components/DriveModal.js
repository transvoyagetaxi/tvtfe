import { useEffect, useState } from 'react'

const EMPTY_FORM = {
  name: '', phone: '', email: '',
  experience: '', hasLicense: false, hasVehicle: false,
  availability: '', message: ''
}

const DriveModal = ({ open, onClose }) => {
  const [form, setForm] = useState(EMPTY_FORM)

  useEffect(() => {
    if (open) setForm(EMPTY_FORM)
  }, [open])

  if (!open) return null

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const body = [
      'Hello,', '',
      'A new driver application has been submitted through transvoyagetaxi.com.', '',
      'Application details:',
      '--------------------------------------------------',
      `Full name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Years of driving experience: ${form.experience || 'Not specified'}`,
      `Valid Colorado driver's license: ${form.hasLicense ? 'Yes' : 'No'}`,
      `Has own vehicle: ${form.hasVehicle ? 'Yes' : 'No'}`,
      `Availability: ${form.availability || 'Not specified'}`,
      '', 'Message / additional info:',
      form.message || 'N/A', '',
      'Please follow up with the applicant at your earliest convenience.',
      '', 'Trans Voyage Taxi — Driver Recruitment'
    ].join('\n')

    const mailto = `mailto:bookings@transvoyagetaxi.com?subject=${encodeURIComponent('Driver application — ' + form.name)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    onClose()
  }

  return (
    <div className="qb-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="qb-modal" onClick={e => e.stopPropagation()}>
        <header className="qb-header">
          <div>
            <p className="kicker">Join the team</p>
            <h3>Driver Application</h3>
            <p className="muted small">Fill in your details and we'll be in touch to discuss the opportunity.</p>
          </div>
          <button className="qb-close" onClick={onClose} aria-label="Close">×</button>
        </header>

        <form className="qb-form" onSubmit={handleSubmit}>
          <label>Full name<input name="name" value={form.name} onChange={handleChange} required /></label>
          <label>Phone<input name="phone" value={form.phone} onChange={handleChange} required /></label>
          <label>Email<input type="email" name="email" value={form.email} onChange={handleChange} required /></label>

          <div className="datetime-grid">
            <label>
              Years of experience
              <select name="experience" value={form.experience} onChange={handleChange} required>
                <option value="">Select…</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1–3 years">1–3 years</option>
                <option value="3–5 years">3–5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </label>
            <label>
              Availability
              <select name="availability" value={form.availability} onChange={handleChange} required>
                <option value="">Select…</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Weekends only">Weekends only</option>
                <option value="Nights / early mornings">Nights / early mornings</option>
                <option value="Flexible">Flexible</option>
              </select>
            </label>
          </div>

          <label className="checkbox">
            <input type="checkbox" name="hasLicense" checked={form.hasLicense} onChange={handleChange} />
            I have a valid Colorado driver's license
          </label>
          <label className="checkbox">
            <input type="checkbox" name="hasVehicle" checked={form.hasVehicle} onChange={handleChange} />
            I have my own vehicle
          </label>

          <label>Tell us about yourself<textarea name="message" placeholder="Any relevant experience, questions, or details you'd like to share..." value={form.message} onChange={handleChange} /></label>

          <div className="qb-actions">
            <button type="button" className="tv-book secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="tv-book">Send application</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DriveModal
