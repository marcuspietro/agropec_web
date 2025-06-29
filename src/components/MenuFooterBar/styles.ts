import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const CardFooter = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  position: fixed;
  bottom: 0px;

  left: 50%;
  transform: translateX(-50%);

  z-index: 1;

  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};
  
  overflow: hidden;
  
  @media (max-width: 600px) {
    
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  justify-content: space-between;
  align-items: center;

  padding: 12px 20px;
`;

type Props = {
  isActive?: boolean;
}

export const ButtonMenu = styled(NavLink)<Props>`
  display: flex;
  gap: 5px;

  flex-direction: row;
  
  align-items: center;
  justify-content: center;

  padding: 8px;

  /* max-height: 60px; */

  background-color: ${
    ({ theme, isActive }) => isActive ?
      css`${theme.COLORS.BRAND_LIGHT}`
    :
      css`${theme.COLORS.WHITE}`
    };

    ${({ isActive }) => !isActive &&
      css`box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2)`
    };

  border-radius: 12px;
`;

export const IconMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: red; */
  border-radius: 8px;

  width: 40px;
  height: 40px;

  /* padding: 6px; */
`;

export const TextSegmento = styled.strong`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 0.7rem;
  font-weight: 600;
`;