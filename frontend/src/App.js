import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { LoginLink } from "./components/LoginLink/LoginLink";
import { RegisterLink } from "./components/RegisterLink/RegisterLink";
import { AppLoaded } from "./pages/AppLoaded/AppLoaded";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import UserProvider from "./context/userContext"

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/todolist" element={<AppLoaded/>}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
