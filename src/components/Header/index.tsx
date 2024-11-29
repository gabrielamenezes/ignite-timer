import { HeaderContainer } from "./styles"
import { Scroll, Timer } from "@phosphor-icons/react"
import logoIgnite  from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Logo da aplicação em tons de verde" />
      <nav>
        <a href="" title="timer"><Timer /></a>
        <a href="" title="histórico"><Scroll /></a>
      </nav>
    </HeaderContainer>
  )
}
