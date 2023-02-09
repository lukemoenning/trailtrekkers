/**
 * Loading component to be displayed when the content has not yet loaded
 */

import React from 'react';
import styled from 'styled-components';
import { Loader } from '@aws-amplify/ui-react';
import { palette } from './assets/constants';

const Load = styled(Loader)`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loading() {
  return (
    <Load emptyColor={palette.GRAY} filledColor={palette.BLACK}/>
  );
};

export default Loading;