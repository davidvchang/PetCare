import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from "./pages/Register"
import Home from "./pages/Home"


function App() {

  return (
    <main className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/admin" element={<Home/>}/>
        </Routes>
      
      </BrowserRouter>
    </main>
  )
}

export default App
