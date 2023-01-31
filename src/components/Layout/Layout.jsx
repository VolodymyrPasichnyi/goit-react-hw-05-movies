import { Outlet } from "react-router-dom"
import { StyledLink } from "./Layout.styled"


export const Layout = () => {
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