import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './pages/form'
import Selector from './pages/selector'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/select" element={<Selector />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
