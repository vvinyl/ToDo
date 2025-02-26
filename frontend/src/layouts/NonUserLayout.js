import BlurText from "../ReactBits/BlurText/BlurText"
import {Outlet} from 'react-router-dom'
import {Header} from "../components/Header/Header"

export const NonUserLayout = () => {
    return (
    <>
        <header>
            <Header></Header>
        </header>
        <main style={{
            height: '85%',
            backgroundColor: '#F2F0EA',
            width: '100%'
        }}>
            <Outlet/>
        </main>
    </>
    )
}