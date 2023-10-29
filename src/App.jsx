import {Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home"
import List from "./pages/List/List"
import Space from "./pages/space/Space"
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path ="/spaces" element={<List/>} />
      <Route path = "/spaces/:id" element={<Space/>} />
    </Routes>
    </>
  )
}

export default App
