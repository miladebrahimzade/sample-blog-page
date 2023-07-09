import { Routes, Route } from 'react-router-dom'

import BlogPage from './BlogPage'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<BlogPage />} />
    </Routes>
  )
}

export default App
