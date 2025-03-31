import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <main className="w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      
      </BrowserRouter>
    </main>
  )
}

export default App
