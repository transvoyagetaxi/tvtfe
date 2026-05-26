import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('App error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="notfound-page tv-container">
          <div className="notfound-card">
            <div className="notfound-code">!</div>
            <h2>Something went wrong</h2>
            <p className="muted">Please reload the page or call us directly at (303) 353-4482.</p>
            <button className="btn" onClick={() => window.location.reload()}>Reload page</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
