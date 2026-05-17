import { useEffect, useState } from 'react'

const PHONE_DISPLAY = '(303) 353-4482'
const PHONE_COPY = '303-353-4482'
const PHONE_HREF = 'tel:+13033534482'

const CallButton = ({ label = `Call ${PHONE_DISPLAY}`, className = 'btn secondary' }) => {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = event => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const openModal = () => {
    setCopied(false)
    setOpen(true)
  }

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_COPY)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <button type="button" className={className} onClick={openModal}>
        {label}
      </button>

      {open && (
        <div className="call-overlay" role="dialog" aria-modal="true" aria-labelledby="call-modal-title">
          <div className="call-modal">
            <header className="qb-header">
              <div>
                <p className="kicker">Call dispatch</p>
                <h3 id="call-modal-title">Trans Voyage Taxi</h3>
                <p className="muted small">Call us anytime for booking help and ride confirmations.</p>
              </div>
              <button className="qb-close" onClick={() => setOpen(false)} aria-label="Close">x</button>
            </header>

            <div className="call-phone">{PHONE_DISPLAY}</div>
            <p className="muted">Use the number above, copy it, or continue to your phone app.</p>

            <div className="call-actions">
              <button type="button" className="tv-book secondary" onClick={copyNumber}>Copy number</button>
              <a className="tv-book" href={PHONE_HREF}>Call now</a>
            </div>

            <div className="call-copy-status" aria-live="polite">
              {copied ? 'Number copied.' : ''}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CallButton
