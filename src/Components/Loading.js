/**
 * Loading component to be displayed when the content has not yet loaded
 */

import React from 'react';
import styled from 'styled-components';
import { Loader } from '@aws-amplify/ui-react';


function Loading() {
  return (
    <Loader />
  );
};

export default Loading;