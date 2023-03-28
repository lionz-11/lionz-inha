import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Toast } from '../../component/Toast/Toast';
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
import defaultProfile from './defaultProfile.png';

const TwinContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProfileCircle = styled.img`
  background-color: #e4ebfa;
  height: 150px;
  width: 150px;
  border-radius: 100px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const ProfileEdit = () => {
  const { welcome } = useParams(); // 첫 정보입력인지 이후 정보 수정인지를 구분하기 위한 parameter
  const [file, setFile] = useState(); // 프로필 이미지를 받아 저장할 변수
  const [profile, setProfile] = useState(''); // 프로필 이미지
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // 잘못된 접근 방지 처리
    if (welcome === '1' && localStorage.getItem('loginCount') !== 0) {
      Toast('잘못된 접근입니다. 메인 화면으로 이동합니다.');
      navigate('/');
    } else {
      // 이미지 불러오기
      axios
        .get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((r) => {
          console.log(r.data);
          setComment(r.data.comment);
          setProfile(r.data.image?.img_link);
          if (welcome === '1') Toast('첫 방문을 환영합니다. 정보를 입력해주세요.');
        });
    }
  }, []);

  // 이미지 업로드
  const postImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // 이미지가 들어온 경우
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append('file', uploadFile);
      setFile(uploadFile);

      // 이미지 보내기
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API}/member/img`,
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((r) => console.log(r))
        .catch((err) => console.log(err));
    }

    // 보낸 이미지가 서버에 제대로 들어갔으니 서버에서 이미지 가져오기
    const getImage = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/member/${localStorage.getItem('id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setProfile(data.image.img_link);
    };

    getImage();
  };

  // 이미지 삭제
  const deleteImage = () => {
    axios
      .delete(`${process.env.REACT_APP_API}/member/img`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .catch((_) => console.log('오류가 발생했습니다! 미안합니다..'));
    setProfile('');
  };

  // 비밀번호 변경, 만약 입력된 것이 없으면 바꾸지 않는다.
  //
  const changePassword = async () => {
    const data = await axios.put(
      `${process.env.REACT_APP_API}/member/password`,
      {
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    return data;
  };

  // 커멘트 바꾸는거
  const changeComment = async () => {
    const data = await axios.put(
      `${process.env.REACT_APP_API}/member/comment`,
      {
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    return data;
  };

  // 시작하기 버튼 누르면 커멘트 수정, 비밀번호도 추가해야함.
  const submit = async () => {
    // 첫방문이면 꼭 프로필 추가하도록!
    if (!file && welcome === '1') {
      Toast('프로필 사진을 추가해주세요.');
    } else if (password === '' && welcome === '1') {
      Toast('초기 비밀번호말고 다른 비밀번호로 변경해주세요');
    } else if (comment === '' && welcome === '1') {
      Toast('한 줄 소개를 작성해주세요');
    } else {
      changeComment()
        .then(() => {
          if (password !== '') return changePassword();
          return true;
        })
        .then(() => {
          // 소개, 비밀번호 모두 변경 완료시 실행
          if (welcome === '1') Toast('환영합니다!');
          else Toast('정보 수정에 성공했습니다.');
          navigate('/');
        })
        .catch((err) => {
          console.log('오류가 발생했습니다! 미안합니다..');
        });
    }
  };

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
                <ProfileCircle src={profile} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <FileInput postImage={postImage} />
                  <TextButton color='lightRed' onClick={deleteImage}>
                    사진 삭제
                  </TextButton>
                </div>
              </div>
            }
          />
          <TitleContainer
            small
            mainTitle={['비밀번호 설정']}
            subTitle={['영어, 숫자로 구성된 비밀번호로 설정해주세요.']}
            component={<InputBox value={password} onChange={(e) => setPassword(e.target.value)} input editPassword />}
          />
        </TwinContainer>

        <Margin height='92' />

        <TitleContainer
          small
          mainTitle={['한 줄 소개']}
          subTitle={['인스타그램 계정, 블로그 링크 혹은 간단한 한 줄 소개를 적어주세요. ex) 고양이가 세상을 지배한다.']}
          component={<InputBox value={comment} onChange={(e) => setComment(e.target.value)} input mainTitle />}
        />
        {welcome === '1' ? (
          <ArrowButtonContainer onClick={submit} text='멋쟁이 사자처럼 11기 활동 시작하기' />
        ) : (
          <ArrowButtonContainer onClick={submit} text='프로필 수정 완료하기' />
        )}
      </Layout>
    </>
  );
};

export default ProfileEdit;
// text='멋쟁이 사자처럼 11기 활동 시작하기'
