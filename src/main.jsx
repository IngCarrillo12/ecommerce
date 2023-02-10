import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'

const domain = import.meta.env.VITE_APP_AUTH_DOMAIN
const clientId  = import.meta.env.VITE_APP_AUTH_CLIENTID
console.log(domain,' ',clientId)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={ store }>
    <Auth0Provider domain={domain} clientId={clientId}  authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
    </Provider> 
    </BrowserRouter>
)
