import BlurText from "../../ReactBits/BlurText/BlurText"
import styles from "./Header.module.css"

export const Header = () => {
    const handleAnimationComplete = () => {
        console.log("Zakończono animację")
    }

    return(
        <div className={styles.header}>
            <BlurText
                text = "T o D o L i s t"
                delay = {150}
                animatedBy = "letters"
                direction = "top"
                onAnimationComplete={handleAnimationComplete}
            />
        </div>
    )
}
