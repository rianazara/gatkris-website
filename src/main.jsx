import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/fonts.css'
import './styles/theme.css'
import './styles/app.css'

// Time-of-day ambient marker on <html> — subtle atmospheric CSS tuned per period.
function applyTimeOfDay() {
  const h = new Date().getHours()
  const tod =
    h >= 5 && h < 8  ? 'dawn'    :
    h >= 8 && h < 12 ? 'morning' :
    h >= 12 && h < 17 ? 'afternoon' :
    h >= 17 && h < 20 ? 'evening' :
    'night'
  document.documentElement.setAttribute('data-tod', tod)
}
applyTimeOfDay()
// Re-check every 30 minutes in case someone leaves the tab open across periods.
setInterval(applyTimeOfDay, 30 * 60 * 1000)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
