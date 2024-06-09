import Navbar from "../Navbar"

type AppShellType = {
    children: React.ReactNode
}

const AppShellScreen = (props : AppShellType) => {

    const {children} = props

    return (
        <main>
            <Navbar/>
            {children}
        </main>
    )
}

export default AppShellScreen

