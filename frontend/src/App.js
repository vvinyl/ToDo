import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { LoginLink } from "./components/LoginLink/LoginLink";
import { RegisterLink } from "./components/RegisterLink/RegisterLink";
import { AppLoaded } from "./pages/AppLoaded/AppLoaded";
import { UserProvider } from "./context/userContext";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLoaded/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
