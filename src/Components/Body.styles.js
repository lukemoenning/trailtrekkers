/**
 * Wrapper styled components for the body content
 */
import styled from 'styled-components';
import { palette, styles } from './assets/constants';


export const BodyNarrow = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  background: ${palette.OFF_WHITE};

  @media (max-width: ${styles.DESKTOP_MIN_WIDTH}) {
    margin-top: ${styles.MOBILE_HEIGHT};
  }
`;


export const BodyWide = styled(BodyNarrow)`
  max-width: 900px;
`;

export const HikesWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;