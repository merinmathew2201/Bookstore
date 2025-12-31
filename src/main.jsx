import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'
import AuthContext from './contextAPI/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='203736889370-hi4vsljue6k6qupe8tffuh2816mihcsf.apps.googleusercontent.com'>
      <ShareContext>
        <AuthContext>
          <App />
        </AuthContext>
      </ShareContext>
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
