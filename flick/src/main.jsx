import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './PhotoFeed'
import Login from './Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
