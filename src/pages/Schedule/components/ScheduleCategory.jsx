import React from 'react';
import styled, { css } from 'styled-components';
import Flex from '../../../component/Flex/Flex';
import Margin from '../../../component/Margin/Margin';
import Typography from '../../../component/Typography/Typography';
import theme from '../../../assets/theme/Theme';

const CategoryWrapper = styled(Flex)`
  width: 248px;
  height: 570px;
  border: 1px solid ${(props) => props.theme.colors.skyBlue};
  border-radius: 10px;
  padding: 0px 19px;
`;

const CategoryButton = styled.button`
  width: 100%;
  height: 40px;
  background: none;
  border-radius: 10px;
  align-items: baseline;
  padding-left: 11px;

  ${(props) => props.theme.box}
  border: 1px solid white;
  transition: 0.5s;

  :hover {
    border: 1px solid ${(props) => props.theme.colors.skyBlue};
  }

  ${(props) => props.theme.flex.flexCenter}
  justify-content: flex-start;

  ${(props) =>
    props.isActive &&
    css`
      border: 1px solid ${theme.colors.skyBlue};
    `}
`;

const ScheduleCategory = ({ currentCategory, setCurrentCategory }) => {
  const buttonClicked = (e) => {
    setCurrentCategory(e.currentTarget.value);
  };

  return (
    <CategoryWrapper flexCenter column justify='flex-start'>
      <Margin height='31' />
      <Typography calenderTitle>일정 카테고리</Typography>
      <Margin height='27' />
      <CategoryButton value='전체 일정' isActive={currentCategory === '전체 일정'} onClick={buttonClicked}>
        <Typography buttonText>📢</Typography>
        <Margin width='19' />
        <Typography small>전체 일정</Typography>
      </CategoryButton>
      <CategoryButton value='멋사 인하대 일정' isActive={currentCategory === '멋사 인하대 일정'} onClick={buttonClicked}>
        <Typography buttonText>🎒</Typography>
        <Margin width='19' />
        <Typography small>멋사 인하대 일정</Typography>
      </CategoryButton>
      <CategoryButton value='멋사 중앙 일정' isActive={currentCategory === '멋사 중앙 일정'} onClick={buttonClicked}>
        <Typography buttonText>🦁</Typography>
        <Margin width='19' />
        <Typography small>멋사 중앙 일정</Typography>
      </CategoryButton>
      <CategoryButton value='생일' isActive={currentCategory === '생일'} onClick={buttonClicked}>
        <Typography buttonText>🎂</Typography>
        <Margin width='19' />
        <Typography small>생일</Typography>
      </CategoryButton>
    </CategoryWrapper>
  );
};

export default ScheduleCategory;
