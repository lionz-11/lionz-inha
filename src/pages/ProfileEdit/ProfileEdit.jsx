import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
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
import test from './test.png';

const TwinContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProfileEdit = () => {
  const { welcome } = useParams();
  // const [image, setImage] = useState();

  useEffect(() => {
    // 한번 감싸줘야함. 아래는 임시로 토큰을 얻기 위한 코드
    const login = async () => {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/auth/login`, {
        email: 'ye@test.com',
        password: '1234',
      });
      localStorage.setItem('accessToken', data.accessToken);
      console.log(data.accessToken);
    };

    const memberConfig = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/member`, {
        email: 'ye@test.com',
        password: '1234',
      });

      console.log(data);
    };

    const postImage = async () => {
      const formData = new FormData();
      formData.append('file', test.png);
      formData.append('file2', 'hi');

      axios
        .post(`${process.env.REACT_APP_API}/member/img`, formData, {
          headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        })
        .then((r) => console.log(r));

      // console.log(response);
    };

    // login();
    // memberConfig();

    // postImage();

    // axios
    //   .get(`${process.env.REACT_APP_API}/member`, {
    //     headers: {
    //       Authorization:
    //         'Bearer ',
    //     },
    //   })
    //   .then((r) => {
    //     console.log(r);
    //   });
  }, []);

  return (
    <>
      <Layout size='small'>
        {welcome === '1' ? <Header onlyTitle /> : <Header />}
        <Margin height='98' />
        {welcome === '1' ? (
          <HeadLine
            src={loveLock}
            mainTitle={['환영합니다 !']}
            subTitle={['멋쟁이사자처럼 11기 활동을 이어나가기 이전에', '본인을 표현할 수 있는 프로필을 작성해봐요.']}
          />
        ) : (
          <HeadLine
            src={loveLock}
            mainTitle={['프로필 수정 페이지입니다.']}
            subTitle={['멋쟁이사자처럼 11기 인원들에게 보여질 프로필을', '수정할 수 있어요. 본인을 자유롭게 표현해보세요.']}
          />
        )}
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
    </>
  );
};

export default ProfileEdit;
// text='멋쟁이 사자처럼 11기 활동 시작하기'
