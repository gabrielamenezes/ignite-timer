import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// criando uma tipagem para o modulo do styled components
// toda vez que o styled-components for importado,
// a definição de tipos será a que eu definir aqui
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType
}
