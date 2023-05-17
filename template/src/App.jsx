import { useState } from 'react'
import Home from './Pages/Home/Home'
import Products from './Pages/addProducts/Products'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<Products/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
