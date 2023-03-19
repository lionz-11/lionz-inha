import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

const TagWrapper = styled.div`
  height: 30px;
  padding: 0px 18px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.veryLightBlue};
  margin-right: 16px;
  ${(props) => props.theme.flex.flexCenter}
`;

const TagBox = ({ children }) => (
  <TagWrapper>
    <Typography sideContentSmall color='blue'>
      {children}
    </Typography>
  </TagWrapper>
);

export default TagBox;
