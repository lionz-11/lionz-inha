import React, { useState, useRef } from 'react';
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
import ArrowButtonContainer from '../../component/ArrowButtonContainer/ArrowButtonContainer';
import { Toast } from '../../component/Toast/Toast';

const TitleWrapper = styled(Flex)`
  justify-content: flex-start;
  width: 100%;
  padding-left: 13px;
`;

const StyledRocket = styled.img`
  position: fixed;
  top: calc(50% - 226px - 60px);
  right: calc(50% - 183px - 200px);
  z-index: 0;

  @media (max-width: 525px) {
    display: none;
  }
`;

const Login = () => {
  const textRef = useRef(null);
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
    axios
      .post(`${process.env.REACT_APP_API}/auth/login`, {
        email: inputId,
        password: inputPw,
      })
      .then((r) => {
        localStorage.setItem('accessToken', r.data.accessToken);
        localStorage.setItem('id', r.data.id);
        localStorage.setItem('loginCount', r.data.count);
        if (r.data.count === 0) {
          navigate('/landing');
        } else {
          navigate('/');
          Toast('로그인 성공! 어서오세요.');
        }
      })
      .catch((e) => {
        Toast('아이디, 비밀번호를 확인해주세요.');
      });
  };

  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  return (
    <Layout hiddenOverflow='hidden' size='login'>
      <Header onlyTitle />
      <StyledRocket src={RocketImg} />
      <Flex column align='center' justify='center' style={{ width: '100%', height: 'calc(100vh - 50px)', zIndex: 2 }}>
        <TitleWrapper>
          <Flex justify='flex-start' align='baseline'>
            <Typography pageTitle style={{ overflowWrap: 'normal' }}>
              LIKELION
              <br />
              INHA UNIV 11기와
              <br />
              함께하기
            </Typography>
          </Flex>
        </TitleWrapper>
        <Margin height='30' />
        <Flex style={{ width: '100%' }} column>
          <InputBox input login placeholder='아이디를 입력하세요.' onChange={handleInputId} onKeyPress={checkEnter} />
          <Margin height='20' />
          <InputBox input login pw alert placeholder='비밀번호를 입력하세요.' onChange={handleInputPw} onKeyPress={checkEnter} />
          <ArrowButtonContainer onClick={submit} text='로그인' />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Login;
