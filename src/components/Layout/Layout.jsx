import { Outlet } from "react-router-dom"
import { StyledLink } from "./Layout.styled"


const Layout = () => {
    return (
    <>
      <header>
        <nav >
            <StyledLink to='/' >Home</StyledLink >
            <StyledLink to='movies' >Movies</StyledLink >
        </nav>
      </header>
      <Outlet/>
    </>
    )
}

export default Layout