import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Header/Header';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import Flex from '../../component/Flex/Flex';
import RocketImg from './rocketImg.png';
import InputBox from '../../component/InputBox/InputBox';
import ArrowButton from '../../component/ArrowButton/ArrowButton';
import { Toast } from '../../component/Toast/Toast';

const TitleWrapper = styled(Flex)`
  justify-content: center;
  position: relative;
  left: 100px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const StyledRocket = styled.img`
  position: relative;
  bottom: 150px;
  right: 40px;
`;

const StyledArrow = styled(ArrowButton)`
  display: inline;
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
  const navigate = useNavigate();

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const submit = () => {
    console.log(inputId, inputPw);
    axios
      .post(`${process.env.REACT_APP_API}/auth/login`, {
        email: inputId,
        password: inputPw,
      })
      .then((r) => {
        localStorage.setItem('accessToken', r.data.accessToken);
        localStorage.setItem('id', r.data.id);
        navigate('/');

        Toast('로그인 성공! 어서오세요.');
      })
      .catch((e) => {
        console.log(e);
        Toast('아이디, 비밀번호를 확인해주세요.');
      });
  };
  return (
    <Layout hiddenOverflow='hidden'>
      <Header onlyTitle />
      <Flex column align='center' justify='center' style={{ width: '100vw', height: 'calc(100vh - 50px)' }}>
        <Margin height='271' />
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
            <StyledArrow onClick={submit}>로그인</StyledArrow>
          </Container2>
        </StyledContainer>
      </Flex>
    </Layout>
  );
};

export default Login;
