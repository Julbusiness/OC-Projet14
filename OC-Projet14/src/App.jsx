import { Routes, Route } from "react-router-dom";
import AddEmployee from './pages/AddEmployee'
import CurrentEmployees from "./pages/CurrentEmployees";

import './App.css'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<AddEmployee />} />
      <Route path="/employees" element={<CurrentEmployees />} />
    </Routes>
    </div>
  )
}

export default App
