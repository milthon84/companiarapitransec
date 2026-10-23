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
      // Intenta consultar /api/status
      const response = await fetch('/api/status')
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
          <span className="badge badge-react">⚛️ React</span>
          <span className="badge-plus">+</span>
          <span className="badge badge-node">🟢 Node.js</span>
          <span className="badge-plus">+</span>
          <span className="badge badge-cpanel">🟧 cPanel</span>
        </div>
        <h1>¡Hola Mundo!</h1>
        <p className="subtitle">
          Aplicación Fullstack lista para desplegar en cPanel con GitHub Actions
        </p>
      </header>

      <main className="card">
        <h2>Prueba de Conexión Frontend &rarr; Backend</h2>
        <p className="description">
          Haz clic en el siguiente botón para enviar una petición HTTP al servidor Node.js (Express).
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
              Asegúrate de que el backend de Node.js esté corriendo (en local en el puerto 3000 o configurado en cPanel Application Manager).
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
        <p>Proyecto base para <strong>companiarapitransec.com</strong></p>
      </footer>
    </div>
  )
}

export default App
