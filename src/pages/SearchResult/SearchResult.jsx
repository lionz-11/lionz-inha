import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Margin from '../../component/Margin/Margin';
import HeadLine from '../../component/HeadLine/HeadLine';
import searchImage from './searchImage.png';
import InputBox from '../../component/InputBox/InputBox';
import TitleSet from '../../component/TitleSet/TitleSet';

const InputSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchResult = () => {
  const { keyword } = useParams();
  const [anotherKeyword, setAnotherKeyword] = useState(keyword);

  const keywordHandler = ({ target }) => {
    setAnotherKeyword(target.value);
  };

  useEffect(() => {});

  return (
    <Layout>
      <Header />
      <Margin height='99' />
      <Title>
        <InputSet>
          <TitleSet
            margin
            mainTitle={['검색 페이지입니다.']}
            subTitle={['찾아보고 싶은 공지나 과제를 검색해서 간편하게 확인할 수 있어요.', '태그로도 검색할 수 있어요.']}
          />
          <InputBox value={anotherKeyword} onChange={keywordHandler} input search placeholder='검색어 입력' />
        </InputSet>
        <img src={searchImage} alt='searchImage' width='364' />
      </Title>

      <Margin height='133' />
    </Layout>
  );
};

export default SearchResult;
