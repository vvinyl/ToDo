import { LoginLink } from "../../components/LoginLink/LoginLink";
import { RegisterLink } from "../../components/RegisterLink/RegisterLink";
import { Header } from "../../components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";

export const AppLoaded = () => {
    return(
        <>
        <Header/>
        <LoginLink/>
        <RegisterLink/>
        </>
    )
}