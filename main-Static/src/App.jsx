import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Dsai from "./Dsai"
import Softd from "./Softd"
import Webd from "./Webd"
import MobileAppd from "./MobileAppd"
const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webd" element={<Webd />} />
        <Route path="/madd" element={<MobileAppd />} />
        <Route path="/softd" element={<Softd />} />
        <Route path="/dsai" element={<Dsai />} />
      </Routes>
    </Router>
  )
}
export default App;