import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import ReportImg from './ReportImg.png';
import Flex from '../../component/Flex/Flex';
import InputBox from '../../component/InputBox/InputBox';
import SelectCategoryButton from '../../component/SelectCategoryButton/SelectCategoryButton';
import InputDateTime from '../../component/InputDateTime/InputDateTime';
import ArrowButton from '../../component/ArrowButton/ArrowButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const CreateReport = () => {
  const [titleColor, setTitleColor] = useState('black');
  const [tagColor, setTagColor] = useState('black');
  const [linkColor, setLinkColor] = useState('black');
  const [refColor, setRefColor] = useState('black');
  const titleChange = (e) => {
    const temp = e.target.value;
    if (temp === '') {
      setTitleColor('red');
    } else {
      setTitleColor('black');
    }
  };
  const tagChange = (e) => {
    const temp = e.target.value;
    if (temp === '') {
      setTagColor('red');
    } else {
      setTagColor('black');
    }
  };
  const linkChange = (e) => {
    const temp = e.target.value;
    if (temp === '') {
      setLinkColor('red');
    } else {
      setLinkColor('black');
    }
  };
  const refChange = (e) => {
    const temp = e.target.value;
    if (temp === '') {
      setRefColor('red');
    } else {
      setRefColor('black');
      console.log('ok');
    }
  };

  return (
    <Layout>
      <Header />
      <Margin height='160' />
      <Flex justify='center' algin='center' style={{ width: '100vw', height: 'calc(100vh-50px)' }}>
        <Container style={{ position: 'relative', left: '17px' }}>
          <Flex justify='space-between' style={{ width: '853px' }}>
            <TextWrapper>
              <Typography pageTitle>과제 작성 페이지입니다.</Typography>
              <Margin height='7' />
              <Typography contentText color='gray'>아기사자들을 위한 과제 작성 페이지입니다.<br />업로드 전에 검토는 필수!</Typography>
            </TextWrapper>
            <img width='225' height='281' src={ReportImg} alt='ReportImg' style={{ marginLeft: '170px' }} />
          </Flex>
          <TextWrapper>
            <Typography header style={{ color: titleColor }}>제목작성</Typography>
            <Margin height='7' />
            <Typography contentText color='gray'>과제의 주제를 잘 담고 있는 제목으로 만들어주세요.</Typography>
          </TextWrapper>
          <Margin height='7' />
          <InputBox input mainTitle onChange={titleChange} />
          <Margin height='70' />
          <TextWrapper>
            <Typography header style={{ color: tagColor }}>태그</Typography>
            <Margin height='7' />
            <Typography contentText color='gray'>이번 과제에서 무엇을 배우나요? 주된 키워드를 작성해주세요.</Typography>
          </TextWrapper>
          <Margin height='7' />
          <InputBox input mainTitle onChange={tagChange} />
          <Margin height='75' />
          <Flex justify='space-between' style={{ width: '853px' }}>
            <TextWrapper>
              <Typography header>마감일</Typography>
            </TextWrapper>
            <InputDateTime />
          </Flex>
          <Margin height='57' />
          <Flex justify='space-between' style={{ width: '853px' }}>
            <TextWrapper>
              <Typography header>카테고리</Typography>
            </TextWrapper>
            <SelectCategoryButton />
          </Flex>
          <Margin height='60' />
          <TextWrapper>
            <Typography header style={{ color: linkColor }}>과제 참고 링크</Typography>
            <Margin height='7' />
            <Typography contentText color='gray'>깃허브 링크 또는 그 외 참고 링크를 넣어주세요. 하나만요...</Typography>
          </TextWrapper>
          <Margin height='12' />
          <InputBox input link onChange={linkChange} />
          <Margin height='90' />
          <TextWrapper>
            <Typography header style={{ color: refColor }}>과제 설명</Typography>
            <Margin height='7' />
            <Typography contentText color='gray'>이 곳에는 단톡방에 과제를 공지할 때 작성한 내용을 적어도 됩니다.<br />격려의 말이나 도움을 주는 말을 더해도 되구요.</Typography>
          </TextWrapper>
          <Margin height='30' />
          <InputBox text homework onChange={refChange} />
          <Margin height='30' />
          <Flex justify='end' style={{ width: '853px' }}>
            <ArrowButton>과제 생성 완료하기</ArrowButton>
          </Flex>
        </Container>
      </Flex>
    </Layout>
  );
};

export default CreateReport;
