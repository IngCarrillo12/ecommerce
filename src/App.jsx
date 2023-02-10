import { Navigation } from './components/Header/Navigation'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { PageCategory } from './Pages/PageCategory'
import { ViewProducto } from './Pages/ViewProducto'



function App() {
  return (  
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/categoria/:id' element={<PageCategory/>}/>
          <Route path='/product/:id' element={<ViewProducto/>}/>
        </Route>
      </Routes>
    
  )
}

export default App
