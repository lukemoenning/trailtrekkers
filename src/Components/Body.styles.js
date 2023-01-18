/**
 * Wrapper styled components for the body content
 */
import styled from 'styled-components';
import { palette, media, nav } from './assets/constants';


export const BodyNarrow = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  background: ${palette.WHITE};

  @media (max-width: ${media.DESKTOP_MIN_WIDTH}) {
    margin-top: ${nav.MOBILE_HEIGHT};
  }
`;


export const BodyWide = styled(BodyNarrow)`
  max-width: 900px;
`;