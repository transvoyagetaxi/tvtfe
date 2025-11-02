const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="tv-footer">
      <div className="tv-container tv-footer-inner">
        <div className="footer-top">
          <h4>Trans Voyage Taxi</h4>
          <p className="muted">Taxi service — Serving Denver Metro & DIA 24/7</p>
        </div>

        <div className="footer-contact">
          <a href="tel:+13033534482" className="footer-link">(303) 353-4482</a>
          <span className="sep">•</span>
          <a href="mailto:info@transvoyagetaxi.com" className="footer-link">info@transvoyagetaxi.com</a>
        </div>

        <div className="footer-address muted">
          1450 South Havana Street Ste 712, Aurora, Colorado 80012
        </div>

        <div className="footer-bottom muted" style={{ marginTop: 8 }}>
          <span>© {year} Trans Voyage Taxi</span>
          <span className="sep">•</span>
          <span>Quality Comes First</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
