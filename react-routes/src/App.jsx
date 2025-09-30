// App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import CategoryLayout from './pages/CategoryLayout'
import Category from './pages/SingleCategory'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<h1>Hello Aboutpage</h1>} />
        <Route path="category" element={<CategoryLayout />} >
          <Route path=":catId" element={<Category />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App
