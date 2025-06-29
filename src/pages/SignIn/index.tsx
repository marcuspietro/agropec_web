
import { BoxFooter, ButtonCta, Container, ContainerLogo, LogoSPRP, NameSPRP, Slogan, Title } from "./styles"

import LogoAgropecSocial from '../../assets/logo_agropec.png';
import LogoSPRPBox from '../../assets/sprp-logo.png';
import { useNavigate } from "react-router-dom";

export const SignIn: React.FC = () => {

  const navigate = useNavigate();

  const handleIsAuthenticated = () => {
    localStorage.setItem("@agropec:signIn", "true");

    navigate("/home");
  }

  return (
    <Container>
        <ContainerLogo src={LogoAgropecSocial} />

        <Title>
          AGROPEC
        </Title>

        <Slogan>
            A maior feira agropecuária da região Norte!
        </Slogan>

        <ButtonCta onClick={handleIsAuthenticated}>
          Entrar
        </ButtonCta>

        <BoxFooter>
          <LogoSPRP src={LogoSPRPBox} />

          <NameSPRP>
            Organização e Realização: Sindicato dos Produtores Rurais de Paragominas
          </NameSPRP>
        </BoxFooter>
    </Container>
  )
}