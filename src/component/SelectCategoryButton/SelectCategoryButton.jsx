import { useState } from 'react';
import styled from 'styled-components';
import Flex from '../Flex/Flex';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';

// 각 버튼에 해당하는 컴포넌트
const StyledButton = styled.button`
  width: 50px;
  height: 29px;
  border: 1px solid ${(props) => (props.color ? props.color : props.theme.colors.lightGray)};
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  ${(props) => props.theme.flex.flexCenter};
`;

// state로 버튼 클릭 여부 확인과 컬러 변경
const SelectCategoryButton = () => {
  const [buttonClicked, setButtonClicked] = useState([true, false, false]);

  const AllClicked = () => {
    setButtonClicked([true, false, false]);
  };

  const FEClicked = () => {
    setButtonClicked([false, true, false]);
  };

  const BEClicked = () => {
    setButtonClicked([false, false, true]);
  };

  return (
    <Flex flexCenter justify='space-between' style={{ width: '168px' }}>
      <StyledButton onClick={AllClicked} color={buttonClicked[0] ? theme.colors.yellow : false}>
        <Typography contentText color={buttonClicked[0] ? 'yellow' : 'lightGray'}>
          ALL
        </Typography>
      </StyledButton>
      <StyledButton onClick={FEClicked} color={buttonClicked[1] ? theme.colors.blue : false}>
        <Typography contentText color={buttonClicked[1] ? 'blue' : 'lightGray'}>
          FE
        </Typography>
      </StyledButton>
      <StyledButton onClick={BEClicked} color={buttonClicked[2] ? theme.colors.lightRed : false}>
        <Typography contentText color={buttonClicked[2] ? 'lightRed' : 'lightGray'}>
          BE
        </Typography>
      </StyledButton>
    </Flex>
  );
};

export default SelectCategoryButton;
