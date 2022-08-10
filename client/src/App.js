import './App.css';
import AllUsers from './components/AllUsers/AllUsers';
import Home from './pages/Home/Home';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/data" element={ <AllUsers/>}/>
    </Routes>
    </>
  );
}

export default App;
