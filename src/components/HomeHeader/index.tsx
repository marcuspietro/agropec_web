import { BellIcon } from "@phosphor-icons/react"
import { BtnHeaderHome, Container, Title } from "./styles"
import { useTheme } from "styled-components"

export const HomeHeader: React.FC = () => {

  const theme = useTheme();

  return (
    <Container>
      <Title>
        Olá, seja bem-vindo(a)
      </Title>

      <BtnHeaderHome to="/notifications">
        <BellIcon size={28} color={theme.COLORS.BRAND_MID} weight='bold' />
      </BtnHeaderHome>
    </Container>
  )
}