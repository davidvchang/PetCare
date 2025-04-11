import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from "./pages/Register"
import Home from "./pages/Home"
import Pets from "./pages/Pets"
import NotFound from "./pages/NotFound"
import Clients from "./pages/Clients"
import Profile from "./pages/Profile"


function App() {

  return (
    <main className="w-full h-screen md:min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/admin" element={<Home/>}/>
          <Route path="/admin/pets" element={<Pets/>}/>
          <Route path="/admin/clients" element={<Clients/>}/>
          <Route path="/admin/profile" element={<Profile/>}/>


          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </BrowserRouter>
    </main>
  )
}

export default App
