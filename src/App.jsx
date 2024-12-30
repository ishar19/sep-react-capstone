import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './pages/form'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
