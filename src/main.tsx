import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ! at the end of the variable, reassures typescript that it exists
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Strict Mode helps with verbose error reporting, it hits the function several times, This can cause issues with API's. Disable by removing tags, leave trailing comma.