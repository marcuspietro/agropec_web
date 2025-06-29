import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

  padding: 50px 52px;

  display: flex;
  flex-direction: column;

  justify-content: flex-end;

  height: 100dvh;
`;

export const ContainerLogo = styled.img`
  width: 170px;
  height: 170px;

  object-fit: cover;

  border-radius: 100px;

  border: 8px solid #F0F1A1;

  overflow: hidden;

  align-self: center;
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  color: #FFFFFF;
    font-size: 1.4rem;
`;

export const Slogan = styled.p`
  font-size: 1rem;
    color: #EAF9E1;
    margin-bottom: 32px;
`;

export const ButtonCta = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px;
    border-radius: 6px;

    border: none;

    flex-direction: row;
    gap: 10px;

    font-size: 1rem;
    font-weight: 600;

    align-items: center;
    justify-content: center;

    background-color: #F0F1A1;
    color: #25473B;
`;

export const BoxFooter = styled.div`
  display: flex;
    gap: 10px;
    align-items: flex-start;

    margin-top: 20px;
`;

export const LogoSPRP = styled.img`
  width: 80px;
`;

export const NameSPRP = styled.p`
  margin-top: 5px;
    font-size: 0.6rem;
    color: #EAF9E1;
`;