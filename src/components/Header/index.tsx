import { HeaderContainer } from "./styles"
import { Scroll, Timer } from "@phosphor-icons/react"
import logoIgnite  from '../../assets/logo.svg'
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Logo da aplicação em tons de verde" />
      <nav>
        <NavLink to='/' title="timer"><Timer /></NavLink>
        <NavLink to='/history' title="histórico"><Scroll /></NavLink>
      </nav>
    </HeaderContainer>
  )
}
