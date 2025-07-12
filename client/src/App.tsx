import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setResult(null)
    setError('')
    try {
      const response = await axios.post('http://localhost:8000/analyze', { text })
      setResult(response.data)
    } catch (err) {
      setError('Something went wrong!')
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <h2>Emotion Reflection Tool</h2>
      <textarea
        placeholder="How are you feeling?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit} disabled={loading || !text.trim()}>
        {loading ? 'Analyzing...' : 'Submit'}
      </button>

      {result && (
        <div className="result-card">
          <p><strong>Emotion:</strong> {result.emotion}</p>
          <p><strong>Confidence:</strong> {Math.round(result.confidence * 100)}%</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default App
