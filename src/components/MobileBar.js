import CallButton from './CallButton'

const MobileBar = ({ openBooking }) => (
  <div className="mobile-bar" aria-label="Quick actions">
    <CallButton className="mobile-bar-btn call" label="Call now" />
    <button type="button" className="mobile-bar-btn book" onClick={openBooking}>
      Book a ride
    </button>
  </div>
)

export default MobileBar
