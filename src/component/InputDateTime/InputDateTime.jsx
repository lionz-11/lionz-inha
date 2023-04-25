import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex/Flex';
import Typography from '../Typography/Typography';

const StyledInput = styled.input`
  width: 150px;
  height: 54px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 10px;
  text-align: center;
  padding: 10px 0px;
  margin-right: 10px;
  position: relative;
  ${(props) => props.theme.font.sideContent};

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};

  ::-webkit-clear-button,
  ::-webkit-inner-spin-button {
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }
`;

const InputDateTime = ({ date, time, onChangeDate, onChangeTime }) => (
  <Flex flexCenter>
    <StyledInput type='date' value={date} onChange={onChangeDate} />
    <StyledInput type='time' style={{ width: '120px' }} value={time} onChange={onChangeTime} />
    <Typography sideContent>까지</Typography>
  </Flex>
);

export default InputDateTime;
