import { CaretLeftIcon } from "@phosphor-icons/react"
import { BtnHeaderHome, Container, Title } from "./styles"
import { useTheme } from "styled-components"
import { useNavigate } from "react-router-dom";

interface Props {
  isText?: string;
}

export const HeaderDefaultGoBack = ({ isText }: Props) => {

  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Container>

      <BtnHeaderHome onClick={() => navigate(-1)}>
        <CaretLeftIcon 
          size={24} 
          weight='bold' 
          color={theme.COLORS.BRAND_MID}
        />
      </BtnHeaderHome>

      {isText && (
        <Title>
          <Title>
            { isText }
          </Title>
        </Title>
      )}

    </Container>
  )
}