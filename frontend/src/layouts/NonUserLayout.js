import BlurText from "../ReactBits/BlurText/BlurText"
import {Outlet} from 'react-router-dom'

export default NonUserLayout = () => {
    const handleAnimationComplete = () => {
        console.log("Animation completed!")
    }

    return (
    <>
        <header style={{
            height: '15vh',
            backgroundColor: '#A8D5E3',
            display: flex,
            justifyContent: 'center',
        }}>
            <BlurText
                text="To Do List"
                delay={150}
                animateBy="top"
                onAnimationComplete={handleAnimationComplete}
            />
        </header>
        <main style={{
            height: '85vh',
            backgroundColor: '#F2F0EA',
            displat: 'flex',
            justifyContent: 'center',
        }}>
            <Outlet/>
        </main>
    </>
    )
}