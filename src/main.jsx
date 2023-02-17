import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

const domain = import.meta.env.VITE_APP_AUTH_DOMAIN
const clientId  = import.meta.env.VITE_APP_AUTH_CLIENTID
let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
  <Provider store={ store }>
  <BrowserRouter>
    <Auth0Provider domain={"dev-wfazx2ibaparoz1z.us.auth0.com"} clientId={"oVCzLJ02ua5oHu9kOKuny00hW0OUp9XY"}  authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
    </Auth0Provider>
    </BrowserRouter>
    </Provider> 
    </PersistGate>
)
