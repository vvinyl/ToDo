import {Container} from "react-bootstrap"
import styles from "./RegisterLink.module.css"
import {useNavigate} from "react-router-dom"

export const RegisterLink = () => {
    const navigate = useNavigate()
    return (
        <Container 
            className={styles.containerColor}
            onClick={() => navigate("/register")}
            >
            Register
        </Container>
    )
}