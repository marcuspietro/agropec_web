import { CardEvent, Container, ContainerContentEvents, ContentDescription, ContentEvent, ContentVideo, DescriptionContentEvent, DescriptionContentText, LogoMiniCard, TitleContentEvent } from "./styles"
import { useTheme } from "styled-components";

import { useEffect, useState } from "react";
import { HeaderDefaultGoBack } from "../../components/HeaderDefaultGoBack";
import type { PointsMap } from "../../database/expositores";
import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../../hooks/app";
import { API_AGROPEC_STATIC } from "../../services/api";

export const Expositor: React.FC = () => {

  const { allExpositores } = useApp();

  const navigate = useNavigate();

  const [expositor, setExpositor] = useState<PointsMap>({
    id: "",
    name: "",
    description: "",
    thumb: "",
    segment: "",
    latitude: 0,
    longitude: 0
  });

  const { id } = useParams();

  const theme = useTheme();

  useEffect(() => {

    if(!id) {
      navigate("/");
    }

    const hasExpositor = allExpositores.find(expo => expo.id === id);

    if(!hasExpositor) {
      navigate("/");

      return;
    }

    setExpositor(hasExpositor);

  }, [allExpositores]);

  return (
    <body style={{ backgroundColor: theme.COLORS.WHITE }}>
      <Container>

        <HeaderDefaultGoBack isText="" />

      </Container>

      <ContainerContentEvents>
        <CardEvent key={expositor.id}>
          <LogoMiniCard
            src={API_AGROPEC_STATIC+expositor.thumb}
            alt={expositor.name}
          />

          <ContentEvent>

            <DescriptionContentEvent>
              {expositor.name}
            </DescriptionContentEvent>

          </ContentEvent>

          <ContentDescription>
            <TitleContentEvent>
              {expositor.segment}
            </TitleContentEvent>

            <DescriptionContentText>
              {expositor.description}
            </DescriptionContentText>
          </ContentDescription>

          {expositor.vid && (
            <ContentVideo>
              <video controls width="100%" style={{ borderRadius: '12px' }}>
                <source src={expositor.vid} type="video/mp4" />
              </video>
            </ContentVideo>
          )}

        </CardEvent>
      </ContainerContentEvents>
    </body>
  )
}