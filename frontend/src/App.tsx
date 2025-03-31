import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from "./pages/Register"

function App() {

  return (
    <main className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      
      </BrowserRouter>
    </main>
  )
}

export default App
