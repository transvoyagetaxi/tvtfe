const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="tv-footer">
      <div className="tv-container tv-footer-inner">
        <div className="footer-top">
          <div>
            <p className="kicker">Trans Voyage Taxi</p>
            <h4>Transportation you can trust</h4>
            <p className="muted">Serving Denver Metro and DIA around the clock.</p>
          </div>
          <div className="footer-actions">
            <a href="tel:+13033534482" className="btn ghost">Call (303) 353-4482</a>
            <a href="mailto:info@transvoyagetaxi.com" className="btn secondary">Email us</a>
          </div>
        </div>

        <div className="footer-contact">
          <span>1450 South Havana Street Ste 712, Aurora, CO 80012</span>
          <span className="sep">•</span>
          <a href="http://www.transvoyagetaxi.com/" target="_blank" rel="noreferrer" className="footer-link">transvoyagetaxi.com</a>
        </div>

        <div className="footer-bottom muted">
          <span>(c) {year} Trans Voyage Taxi</span>
          <span className="sep">•</span>
          <span>Quality comes first</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
