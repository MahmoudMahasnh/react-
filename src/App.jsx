
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import MainPage from './MainPage'
import Support from './Support'
import Featuers from './Featuers'
import EnterPrise from './EnterPrise'
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="support" element={<Support />} />
          <Route path="enterprise" element={<EnterPrise />} />
          <Route path="features" element={<Featuers />} />
        </Routes>

        


      </Router>

    </>

  )
}

export default App