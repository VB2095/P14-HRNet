
import './App.scss'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/home'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import CurrentEmployees from './pages/CurrentEmployees/CurrentEmployees'
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <main>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/CreateEmployee" element={<CreateEmployee />} />
        <Route path="/CurrentEmployees" element={<CurrentEmployees />} />
      </Routes>
      </main>
      
    </Provider>
  )
}

export default App
