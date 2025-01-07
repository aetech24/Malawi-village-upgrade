import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
// import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Auth0Provider
      domain="dev-rkxyk0rqub1akez1.us.auth0.com"
      clientId="mAlZfw5B1Q93ERaGxYllDGQYgbssGvfi"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    > */}
      <Router>
        <App />
      </Router>
    {/* </Auth0Provider> */}
  </StrictMode>,
)
