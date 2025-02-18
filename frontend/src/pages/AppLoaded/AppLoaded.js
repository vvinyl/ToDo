import { LoginLink } from "../../components/LoginLink/LoginLink";
import { RegisterLink } from "../../components/RegisterLink/RegisterLink";
import { Header } from "../../components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./AppLoaded.module.css";

export const AppLoaded = () => {
    return (
        <Container fluid className="p-0">
            <Container className={styles.header}>
                <Header />
            </Container>

            {/* Kontener dla przycisków */}
            <Container className={styles.przyciski}>
                <Row className="w-100">
                        <LoginLink />
                </Row>
                <Row className="w-100">
                        <RegisterLink />
                </Row>
            </Container>
        </Container>
    );
};
