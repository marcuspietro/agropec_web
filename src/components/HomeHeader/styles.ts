import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const BtnHeaderHome = styled(NavLink)`
  height: 40px;
  width: 40px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  margin-left: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
`;