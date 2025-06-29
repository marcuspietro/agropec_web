import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;

  gap: 25px;

  max-width: 600px;

  /* background-color: ${({ theme }) => theme.COLORS.BRAND_MIN_LIGHT}; */
`;

export const Main = styled.main`
  display: flex;

  width: 100%;

  /* background-color: ${({ theme }) => theme.COLORS.BRAND_ULTRA_LIGHT}; */
`;

export const ListPostsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 100%;

  margin-top: 10px;
  
  padding-bottom: 100px;
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

  object-fit: cover;

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