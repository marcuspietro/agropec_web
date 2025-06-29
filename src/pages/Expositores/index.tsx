import { ButtonCategory, CardEvent, Container, ContainerContentCategories, ContainerContentEvents, ContentDays, ContentEvent, DescriptionContentEvent, LogoMiniCard, TextCategory, TitleContentEvent } from "./styles"
import { useTheme } from "styled-components";

import { useCallback, useEffect, useState } from "react";
import { HeaderDefaultGoBack } from "../../components/HeaderDefaultGoBack";
import type { PointsMap } from "../../database/expositores";
import { API_AGROPEC_STATIC } from "../../services/api";
import { useApp } from "../../hooks/app";

export const Expositores: React.FC = () => {

  const { allCategoriesExpositores, allExpositores } = useApp();

  const [listEventsActive, setListEventsActive] = useState<PointsMap[]>(allExpositores);

  const theme = useTheme();

  const handleAlterListForCategory = useCallback((category: string) => {

    const newListForCategory = allExpositores.filter(point => point.segment === category);

    setListEventsActive(newListForCategory);

  }, [allExpositores, allCategoriesExpositores]);

  useEffect(() => {
    setListEventsActive(allExpositores)
  }, [allExpositores]);

  return (
    <body style={{ backgroundColor: theme.COLORS.WHITE }}>
      <Container>

        <HeaderDefaultGoBack isText="Expositores" />

        <ContainerContentCategories>
          <ContentDays>
            {allCategoriesExpositores.map(category => {

              return (
                <ButtonCategory key={category.id} onClick={() => handleAlterListForCategory(category.name)}>
                  <TextCategory>
                    {category.name}
                  </TextCategory>
                </ButtonCategory>
              )
            })}
          </ContentDays>
        </ContainerContentCategories>

      </Container>

      <ContainerContentEvents>
        {listEventsActive.map((eventData) => {

          return (
            <CardEvent key={eventData.id} to={eventData.id}>
              <LogoMiniCard
                src={API_AGROPEC_STATIC+eventData.thumb}
                alt={eventData.name}
              />

              <ContentEvent>
                <TitleContentEvent>
                  {eventData.segment}
                </TitleContentEvent>

                <DescriptionContentEvent>
                  {eventData.name}
                </DescriptionContentEvent>

              </ContentEvent>
            </CardEvent>
          )
        })}
      </ContainerContentEvents>
    </body>
  )
}