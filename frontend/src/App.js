import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { LoginLink } from "./components/LoginLink/LoginLink";
import { RegisterLink } from "./components/RegisterLink/RegisterLink";
import { AppLoaded } from "./pages/AppLoaded/AppLoaded";

function App() {
  return (
    <>
      <AppLoaded/>
    </>
  );
}

export default App;
