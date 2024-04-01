import "./App.css";
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";


function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  
      </div>
    </>
  );
}

export default App;
