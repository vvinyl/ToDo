import { LoginLink } from "../../components/LoginLink/LoginLink";
import { RegisterLink } from "../../components/RegisterLink/RegisterLink";
import { Header } from "../../components/Header/Header";
import { Container, Col } from "react-bootstrap";
import styles from "./AppLoaded.module.css";
import {Link} from "react-router-dom"

export const AppLoaded = () => {
    return (
        <Container>
            <Container className={styles.box}>
                <Col className={styles.col}>
                    <Link to="/login" className={styles.link}>
                        <Container className={styles.boxes}>
                            Log in
                        </Container>
                    </Link>
                    <Link to="register" className={styles.link}>
                        <Container className={styles.boxes}>
                            Register
                        </Container>
                    </Link>
                </Col>
            </Container>
        </Container>
    );
};