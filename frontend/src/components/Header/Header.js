import BlurText from "../../ReactBits/BlurText/BlurText"
import styles from "./Header.module.css"
import {Container} from "react-bootstrap"

export const Header = () => {
    const handleAnimationComplete = () => {
        console.log("Zakończono animację")
    }

    return(
        <Container fluid
            className={`${styles.header} p-0 m-0`}>
            <BlurText
                text = "To Do List"
                delay = {150}
                animatedBy = "words"
                direction = "top"
                onAnimationComplete={handleAnimationComplete}
            />
        </Container>
    )
}
