import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from "./pages/Register"
import Home from "./pages/Home"
import Pets from "./pages/Pets"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <main className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/admin" element={<Home/>}/>
          <Route path="/admin/pets" element={<Pets/>}/>


          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </BrowserRouter>
    </main>
  )
}

export default App
