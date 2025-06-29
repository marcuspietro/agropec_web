import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;

  padding-bottom: 0px;

  gap: 10px;

  max-width: 600px;
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

  padding: 0px 0px 20px 0px;
  
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

  padding: 10px;
  padding-bottom: 120px;


  max-width: 600px;
  margin: 0 auto;
`;

export const CardEvent = styled.div`
  display: flex;
  gap: 0px;

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
  font-size: 1rem;
`;

export const TitleContentEventGeneric = styled.strong`
  color: ${({ theme }) => theme.COLORS.BRAND_MID};
  font-weight: 600;
  font-size: 0.7rem;
`;

export const DescriptionContentEvent = styled.pre`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: 0.9rem;

  padding: 5px 0px;
`;

export const LocaleEvent = styled.div`
  padding-top: 4px;

  display: flex;
  align-items: center;
  gap: 6px;
`;