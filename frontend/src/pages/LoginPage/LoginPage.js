// import {Container, Card, Button, Form, Row, Col } from "react-bootstrap"
import {Form, Container, Button} from "react-bootstrap"
import {Header} from "../../components/Header/Header"
import styles from "./LoginPage.module.css"

export const LoginPage = () => {
    return (
        <Container>
            <Header></Header>
            <Container className={styles.loginCard}>
        {/* <Card>
            <Card.Title>
            Log in
            </Card.Title>
            <Card.Body>
                <Form.Group 
                    placegolder="Email..."
                    value={email}
                    >
                    
                </Form.Group>
            </Card.Body>
        </Card> */}
            </Container>
        </Container>
    )
}