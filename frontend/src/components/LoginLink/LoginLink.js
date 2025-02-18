import {Container, Col, Row} from "react-bootstrap"
import styles from "./LoginLink.module.css"
import { useNavigate } from "react-router-dom"

export const LoginLink = () => {
    const navigate = useNavigate();
    return (
        <Container 
            className={styles.containerColor}
            onClick={() => navigate("/login")}>
            Log in
        </Container>
    )
}