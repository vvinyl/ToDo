import styles from "./Registerpage.module.css"
import {Container, Form, Button, Col} from "react-bootstrap"
import {useNavigate, Link} from "react-router-dom"
import { useState } from "react"
import axios from 'axios'

export const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfbirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]= useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:3001/userRegister', {
                name,
                email,
                dateOfbirth,
                password
            });

            const loginResponse = await axios.post('http://localhost:3001/userLogin', {
                email,
                password,
            });

            if(loginResponse.data && loginResponse.data.token){
                localStorage.setItem('userToken', loginResponse.data.token)
                navigate('/home')
            }
        } catch(error){
            setError("Registration failed...")
        }
    }

    return(
        <Container className={styles.mainBox}>
            <Col className={styles.col}>
            <Container className={styles.width}>
                <Container className={styles.registerContainer}>
                    <h1 style={{textAlign: "center"}}>Register</h1>

        <Form onSubmit={handleSubmit} className={styles.form}>
            <Form.Group controlId="name" className={styles.FormGroup}>
                <Form.Label>
                    Name
                </Form.Label>
                <Form.Control>

                </Form.Control>
            </Form.Group>
            <Form.Group controlId="email" className={styles.FormGroup}>
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control>

                </Form.Control>
            </Form.Group>
            <Form.Group controlId="dateOfBirth" className={styles.FormGroup}>
                <Form.Label>
                    Date of birth
                </Form.Label>
                <Form.Control>

                </Form.Control>
            </Form.Group>
            <Form.Group controlId="password" className={styles.FormGroup}>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control>

                </Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword" className={styles.FormGroup}>
                <Form.Label>
                    Confirm password
                </Form.Label>
                <Form.Control>

                </Form.Control>
            </Form.Group>

            <Button type="submit" classname={styles.submitButton}>Register</Button>
        </Form>


                </Container>
                <Link to="/" className={styles.link}>
                    <Container className={styles.back}>
                        Back
                    </Container>
                </Link>
            </Container>
            </Col>
        </Container>
    )
}