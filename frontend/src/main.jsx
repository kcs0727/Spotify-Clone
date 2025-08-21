import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/usercontext.jsx'
import { SongProvider } from './context/songcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SongProvider>
          <App />
        </SongProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
