import React from 'react';
import styled from 'styled-components';
import Flex from '../../../component/Flex/Flex';
import Typography from '../../../component/Typography/Typography';

const ButtonWrapper = styled(Flex)`
  width: 206px;
  height: 432px;
  justify-content: space-between;
`;

const StyledButton = styled.div`
  width: 206px;
  height: 132px;
  padding-top: 20px;
  padding-left: 22px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.skyBlue};
  border-radius: 10px;
  ${(props) => props.theme.box}
  transition: 0.5s;
`;

const Buttons = () => (
  <ButtonWrapper flexCenter column>
    <StyledButton>
      <Typography sideContentSmall color='darkGray'>
        오늘 뭐 하지?
      </Typography>
    </StyledButton>
  </ButtonWrapper>
);

export default Buttons;
