import { SealCheckIcon } from "@phosphor-icons/react"
import { HomeHeader } from "../../components/HomeHeader"
import { Container, ContentTitleHeaderPost, DescriptionPost, HeaderPostComponent, ListPostsContent, LogoAgropec, Main, PhotoPost, PostComponent, TitleHeaderPost, VideoPost } from "./styles"
import { useTheme } from "styled-components";

import LogoAgropecSocial from '../../assets/logo_agropec.png';
import { MenuFooterBar } from "../../components/MenuFooterBar";
import { useApp } from "../../hooks/app";
import { API_AGROPEC_STATIC } from "../../services/api";



export const Home: React.FC = () => {

  const { loadingCore, posts } = useApp();

  const theme = useTheme();

  return (
    <Container>
      <HomeHeader />

      <Main>
        {loadingCore ?
          <strong>Carregando...</strong>
        :
          <ListPostsContent>
            {posts.map((item) => {
  
              return (
                <PostComponent key={item.id}>
                  <HeaderPostComponent>

                    <LogoAgropec
                      src={LogoAgropecSocial}
                      alt="Logo Agropec"
                    />

                    <ContentTitleHeaderPost>
                      <TitleHeaderPost>
                        Agropec
                      </TitleHeaderPost>

                      <SealCheckIcon size={14} color={theme.COLORS.BRAND_ULTRA_LIGHT} weight='fill' />
                    </ContentTitleHeaderPost>

                  </HeaderPostComponent>

                  {item.type_media === "img" ?
                    <PhotoPost
                      src={`${API_AGROPEC_STATIC}${item.media}`}
                      alt="Post agropec"
                    />
                  :
                    <VideoPost
                      controls
                      src={`${API_AGROPEC_STATIC}${item.media}`}
                    />
                  }

                  <DescriptionPost>
                    {item.description}
                  </DescriptionPost>
                </PostComponent>
              )
            })}
          </ListPostsContent>
        }
      </Main>

      <MenuFooterBar btnActive='home' />
    </Container>
  )
}