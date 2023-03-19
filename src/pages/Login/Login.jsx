import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import Flex from '../../component/Flex/Flex';
import RocketImg from './rocketImg.png';
import InputBox from '../../component/InputBox/InputBox';
import ArrowButton from '../../component/ArrowButton/ArrowButton';

const TitleWrapper = styled(Flex)`
  justify-content: center;
  position:relative;
  left:100px;
`;

const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:left;
`;

const StyledRocket = styled.img`
  position: relative;
  bottom: 150px;
  right: 40px;
`;

const Container1 = styled.div`
  display: flex;
`;

const Container2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledContainer = styled(Flex)`
  position: relative;
  bottom: 280px;
`;

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <Layout>
      <Header />
      <Margin height='270' />
      <TitleWrapper>
        <Container1>
          <TextWrapper>
            <Typography pageTitle>LIKELION</Typography>
            <Typography pageTitle>INHA UNIV 11기와</Typography>
            <Typography pageTitle>함께하기</Typography>
          </TextWrapper>
          <StyledRocket src={RocketImg} />
        </Container1>
      </TitleWrapper>
      <StyledContainer column>
        <InputBox input login placeholder='아이디를 입력하세요.' onChange={handleInputId} />
        <Margin height='24' />
        <InputBox input login pw alert placeholder='비밀번호를 입력하세요.' onChange={handleInputPw} />
        <Margin height='15' />
        <Container2>
          <ArrowButton>로그인</ArrowButton>
        </Container2>
      </StyledContainer>
    </Layout>
  );
};

export default Login;
