import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import FileInput from '../../component/FileInput/FileInput';
import Layout from '../../component/Layout/Layout';
import loveLock from './Love Lock.svg';
import TextButton from '../../component/TextButton/TextButton';
import InputBox from '../../component/InputBox/InputBox';
import HeadLine from '../../component/HeadLine/HeadLine';
import TitleContainer from '../../component/TitleContainer/TitleContainer';
import Margin from '../../component/Margin/Margin';
import ArrowButtonContainer from '../../component/ArrowButtonContainer/ArrowButtonContainer';
import Header from '../../component/Header/Header';

const TwinContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProfileEdit = () => {
  console.log('hi');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/member`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY3Nzk1NzI1MH0.7dYQK7mwK2YdNS5LjEYTY5P5_76YQoVH1cfes0yI0wqNiGBcIEF2eNjycdyX60VaIYhxMKW_ZBVdsW-AaaNeaw',
        },
      })
      .then((r) => {
        console.log(r);
      });
  }, []);

  return (
    <Layout size='small'>
      <Header />
      <Margin height='98' />

      <HeadLine
        src={loveLock}
        mainTitle={['환영합니다 !']}
        subTitle={['멋쟁이사자처럼 11기 활동을 이어나가기 이전에', '본인을 표현할 수 있는 프로필을 작성해봐요.']}
      />
      <Margin height='50' />
      <TwinContainer>
        <TitleContainer
          small
          mainTitle={['프로필 사진']}
          subTitle={['자신을 잘 표현할 수 있는 사진을 선택해 봅시다.']}
          component={
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'pink', height: '150px', width: '150px', borderRadius: '100px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <FileInput />
                <TextButton color='lightRed'>사진 삭제</TextButton>
              </div>
            </div>
          }
        />
        <TitleContainer
          small
          mainTitle={['비밀번호 설정']}
          subTitle={['영어, 숫자로 구성된 비밀번호로 설정해주세요.']}
          component={<InputBox input editPassword />}
        />
      </TwinContainer>

      <Margin height='92' />

      <TitleContainer
        small
        mainTitle={['한 줄 소개']}
        subTitle={['인스타그램 계정, 블로그 링크 혹은 간단한 한 줄 소개를 적어주세요. ex) 고양이가 세상을 지배한다.']}
        component={<InputBox input mainTitle />}
      />
      <ArrowButtonContainer text='멋쟁이 사자처럼 11기 활동 시작하기' />
    </Layout>
  );
};

export default ProfileEdit;
// text='멋쟁이 사자처럼 11기 활동 시작하기'
