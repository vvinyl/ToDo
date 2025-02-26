import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AppLoaded } from "./pages/AppLoaded/AppLoaded";
import { UserProvider } from "./context/userContext";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import {NonUserLayout} from "./layouts/NonUserLayout"

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>

          <Route element={<NonUserLayout />}>
            <Route path="/" element={<AppLoaded/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
          </Route>
        
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
