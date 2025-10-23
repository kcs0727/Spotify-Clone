import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/usercontext.jsx'
import { SongProvider } from './context/songcontext.jsx'
import { PaymentProvider } from './context/paymentcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SongProvider>
          <PaymentProvider>
            <App />
          </PaymentProvider>
        </SongProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
