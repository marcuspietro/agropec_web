import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100dvh;

  background-color: transparent;
`;

export const ContainerPermission = styled.div`

  width: 100%;

  background-color: transparent;

  margin: 0 auto;
  max-width: 600px;

  padding: 30px;

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 0.8rem;
  }
`;

export const MenuHeaderMapa = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;

  background-color: transparent;

  left: 50%;
  transform: translateX(-50%);

  z-index: 1;

  padding: 35px 25px;
  margin: 0 auto;
  max-width: 600px;

  display: flex;
  gap: 15px;
`;

export const BtnHeaderHome = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListHeaderMenuMapa = styled.div`
  flex: 1;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const BtnHeadeListMenuMapa = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnHeadeListMenuExpositoresMapa = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.COLORS.BRAND_MIN_LIGHT};

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxFooterExpositor = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;

  height: 190px;

  background-color: transparent;

  left: 50%;
  transform: translateX(-50%);

  z-index: 1;

  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
`;

export const BoxCardExpositor = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  overflow: hidden;

  height: 100%;

  padding: 15px;

  border-radius: 18px;

  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const BoxCardExpositorContent = styled.div`
  display: flex;
  margin-top: auto;
  gap: 10px;

  flex: 1;

  img {
    width: 70px;
    height: 70px;

    border: 2px solid ${({ theme }) => theme.COLORS.BRAND_MID};

    background-color: #FFFFFF;

    border-radius: 7px;
  }

  div {
    display: flex;
    flex-direction: column;
    
    flex: 1;
    max-height: 60px;

    gap: 5px;

    strong {
      color: ${({ theme }) => theme.COLORS.BRAND_MIN_LIGHT};
      font-weight: 600;
      font-size: 0.7rem;
    }
    
    h3 {
      color: ${({ theme }) => theme.COLORS.BRAND_MID};
      font-size: 1rem;
    }
  }
`;

export const ButtonNav = styled(NavLink)`
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  border-radius: 8px;
  padding: 10px;

  font-size: 0.8rem;
  font-weight: 600;
`;

export const TitleEventDay = styled.h1`
  color: ${({ theme }) => theme.COLORS.BRAND_MID};

  font-size: 1rem;

  padding-top: 30px;
`;

export const ContainerContentDays = styled.div`
  width: 100%;

  padding: 15px 0px 15px 0px;
  
  overflow: scroll;
`;

export const ContentDays = styled.div`
  display: flex;
  gap: 20px;
`;

type Props = {
  isActive?: boolean
}

export const OptionEventDay = styled.button<Props>`
  border-radius: 8px;

  padding: 20px;
  min-width: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background-color: ${({ theme, isActive }) => isActive ?
    theme.COLORS.BRAND_MIN_LIGHT
  :
    theme.COLORS.BRAND_MID
  }
`;

export const TitleNumberDayEvent = styled.h3<Props>`

  font-size: 1rem;

  color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const TitleNameDayEvent = styled.span<Props>`

  font-size: 0.7rem;

  color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const ContainerContentCategories = styled.div`
  width: 100%;

  padding: 7px 0px 7px 0px;
  
  overflow: scroll;
`;

export const ButtonCategory = styled.button`
  padding: 10px 14px;

  background-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};

  border-radius: 18px;
`;

export const TextCategory = styled.strong`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 0.6rem;
  font-weight: 600;
`;


export const Main = styled.main`
  display: flex;

  width: 100%;
`;

export const ListPostsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 100%;

  margin-top: 10px;
`;

export const PostComponent = styled.div`
  padding: 14px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};

  width: 100%;
`;

export const HeaderPostComponent = styled.header`
  display: flex;
  gap: 10px;
  align-items: center;

  padding-bottom: 10px;
`;

export const ContentTitleHeaderPost = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LogoAgropec = styled.img`
  width: 28px;
  height: 28px;

  align-self: center;

  background-color: ${({ theme }) => theme.COLORS.BRAND_MIN_LIGHT};

  border-radius: 100%;
`;

export const TitleHeaderPost = styled.strong`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 0.7rem;
  font-weight: 600;
`;

export const PhotoPost = styled.img`
  width: 100%;
  min-height: 300px;

  border-radius: 12px;
`;

export const VideoPost = styled.video`
  width: 100%;
  height: 400px;

  object-fit: cover;

  border-radius: 12px;
`;

export const DescriptionPost = styled.pre`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 0.8rem;

  padding: 14px 0px;
`;

export const ContainerContentEvents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-bottom: 120px;
`;

export const CardEvent = styled.div`
  display: flex;
  gap: 12px;

  padding: 20px 26px;

  align-items: flex-start;
`;

export const LogoMiniCard = styled.img`
  width: 60px;
  height: 60px;

  object-fit: cover;

  background-color:${({ theme }) => theme.COLORS.WHITE};

  border-radius: 12px;
`;

export const ContentEvent = styled.div`
  flex: 1;
  gap: 2px;
`;

export const TitleContentEvent = styled.strong`
  color: ${({ theme }) => theme.COLORS.BRAND_MID};
  font-size: 0.8rem;
`;

export const TitleContentEventGeneric = styled.strong`
  color: ${({ theme }) => theme.COLORS.BRAND_MID};
  font-weight: 600;
  font-size: 0.7rem;
`;

export const DescriptionContentEvent = styled.pre`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: 0.7rem;

  padding: 5px 0px;
`;

export const LocaleEvent = styled.div`
  padding-top: 4px;

  display: flex;
  align-items: center;
  gap: 6px;
`;