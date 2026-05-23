import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) { navigate('/', { replace: true }); return }
    const id = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(id)
  }, [count, navigate])

  return (
    <div className="notfound-page tv-container">
      <div className="notfound-card">
        <div className="notfound-code">404</div>
        <h2>Page not found</h2>
        <p className="muted">That page doesn't exist. Taking you home in {count}…</p>
        <button className="btn" onClick={() => navigate('/', { replace: true })}>
          Go home now
        </button>
      </div>
    </div>
  )
}

export default NotFound
