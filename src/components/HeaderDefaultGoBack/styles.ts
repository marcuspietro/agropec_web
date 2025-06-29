import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;

  grid-template-columns: 50px 1fr 50px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.BRAND_MID};

  text-align: center;

  flex: 1;
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