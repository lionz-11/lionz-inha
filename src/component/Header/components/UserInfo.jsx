import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Margin from '../../Margin/Margin';
import Typography from '../../Typography/Typography';
import Flex from '../../Flex/Flex';

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isClicked ? 'block' : 'none')};
`;

const ProfileButton = styled.button`
  position: fixed;
  top: 0px;
  right: max(calc((100vw - 1312px) / 2), 0px);
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

const InfoWrapper = styled.div`
  position: fixed;
  top: 50px;
  right: max(calc((100vw - 1312px) / 2), 0px);
  width: 320px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid #e3eaf0;
  box-shadow: 2px 4px 8px -1px rgba(49, 76, 145, 0.15);
  padding: 0px 22px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;

  ${(props) =>
    props.isClicked &&
    css`
      opacity: 100;
      visibility: visible;
    `};
  transition: 0.5s;
`;

const StyledTextButton = styled.button`
  color: ${(props) => props.theme.colors.gray};
  border: none;
  background: none;
  cursor: pointer;
  ${(props) => props.theme.font.sideContentSmall};
`;

const UserInfo = ({ part, name, comment }) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <>
      <Wrapper isClicked={isClicked} onClick={() => setIsClicked(false)} />
      <ProfileButton onClick={() => setIsClicked(true)} />
      <InfoWrapper column isClicked={isClicked}>
        <Margin height='22' />
        <Flex style={{ width: '100%' }} justify='space-between'>
          <Flex>
            <Typography sideContentSmall color={part === 'FE' ? 'blue' : 'red'}>
              {part}
            </Typography>
            <Margin width='10' />
            <Typography buttonText>{name}</Typography>
          </Flex>
          <StyledTextButton onClick={() => navigate('/profile-edit/0')}>수정</StyledTextButton>
        </Flex>
        <Margin height='10' />
        <Typography sideContentSmall color='darkGray' style={{ width: '100%' }}>
          {comment}
        </Typography>
        <Margin height='22' />
      </InfoWrapper>
    </>
  );
};

export default UserInfo;
