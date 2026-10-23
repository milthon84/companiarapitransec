import { useState } from 'react'
import './App.css'

function App() {
  const [backendData, setBackendData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const testBackend = async () => {
    setLoading(true)
    setError(null)
    try {
      // Petición al backend en /backend_app/status
      const response = await fetch('/backend_app/status')
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      setBackendData(data)
    } catch (err) {
      console.error(err)
      setError(err.message || 'No se pudo conectar con el backend')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <div className="badges">
          <span className="badge badge-react">⚛️ React (/frontend_app)</span>
          <span className="badge-plus">+</span>
          <span className="badge badge-node">🟢 Node.js (/backend_app)</span>
          <span className="badge-plus">+</span>
          <span className="badge badge-cpanel">🟧 cPanel</span>
        </div>
        <h1>¡Hola Mundo!</h1>
        <p className="subtitle">
          Frontend alojado en <code>public_html/frontend_app</code> y Backend en <code>/backend_app</code>
        </p>
      </header>

      <main className="card">
        <h2>Prueba de Conexión Frontend &rarr; Backend</h2>
        <p className="description">
          Haz clic en el siguiente botón para enviar una petición HTTP a <code>/backend_app/status</code>.
        </p>

        <button 
          className="btn-primary" 
          onClick={testBackend} 
          disabled={loading}
        >
          {loading ? 'Consultando al servidor...' : 'Probar conexión con Backend'}
        </button>

        {error && (
          <div className="alert alert-error">
            <strong>❌ Error de conexión:</strong> {error}
            <p className="hint">
              Verifica que el backend esté ejecutándose en <code>/backend_app</code>.
            </p>
          </div>
        )}

        {backendData && (
          <div className="alert alert-success">
            <h3>✅ ¡Conexión Exitosa con Node.js!</h3>
            <pre>{JSON.stringify(backendData, null, 2)}</pre>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Proyecto para <strong>companiarapitransec.com</strong></p>
      </footer>
    </div>
  )
}

export default App
