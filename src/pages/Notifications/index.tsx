import { CardEvent, Container, ContainerContentEvents, ContentEvent, DescriptionContentEvent, TitleContentEvent } from "./styles"
import { useTheme } from "styled-components";

import { useEffect } from "react";
import { MenuFooterBar } from "../../components/MenuFooterBar";
import { HeaderDefaultGoBack } from "../../components/HeaderDefaultGoBack";
import { useApp } from "../../hooks/app";

export const Notifications: React.FC = () => {

  const { loadingCore, notifications, fetchNotifications } = useApp();

  const theme = useTheme();

  useEffect(() => {
    fetchNotifications();
  }, [])

  return (
    <body style={{ backgroundColor: theme.COLORS.WHITE }}>
      <Container>

        <HeaderDefaultGoBack isText="Notificações" />

      </Container>

      <ContainerContentEvents>
        {loadingCore ?

          <TitleContentEvent style={{ textAlign: "center", paddingTop: "30px", fontSize: "1rem" }}>
            Carregando...
          </TitleContentEvent>
        
        : notifications.map((notific) => {

          return (
            <CardEvent key={notific.id}>

              <ContentEvent>
                <TitleContentEvent>
                  {notific.title}
                </TitleContentEvent>

                <DescriptionContentEvent>
                  {notific.description}
                </DescriptionContentEvent>

              </ContentEvent>
            </CardEvent>
          )
        })}
      </ContainerContentEvents>

      <MenuFooterBar btnActive='agenda' />
    </body>
  )
}