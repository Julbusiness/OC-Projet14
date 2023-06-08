import { Routes, Route } from "react-router-dom";
import AddEmployee from './pages/AddEmployee'

import './App.css'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<AddEmployee />} />
    </Routes>
    </div>
  )
}

export default App
