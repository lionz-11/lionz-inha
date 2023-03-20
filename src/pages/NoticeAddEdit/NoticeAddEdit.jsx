import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Layout from '../../component/Layout/Layout';
import Margin from '../../component/Margin/Margin';
import HeadLine from '../../component/HeadLine/HeadLine';
import noticeImg from './noticeImg.png';
import TitleContainer from '../../component/TitleContainer/TitleContainer';
import InputBox from '../../component/InputBox/InputBox';
import Flex from '../../component/Flex/Flex';
import SelectCategoryButton from '../../component/SelectCategoryButton/SelectCategoryButton';
import Typography from '../../component/Typography/Typography';
import ArrowButtonContainer from '../../component/ArrowButtonContainer/ArrowButtonContainer';

const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding-left: 13px;
`;

const NoticeAddEdit = () => {
  const { addOrEdit } = useParams();
  const [category, setCategory] = useState('ALL');

  return (
    <Layout size='small'>
      <Header />
      <Margin height='98' />
      {addOrEdit === 'add' && (
        <HeadLine
          src={noticeImg}
          mainTitle={['공지 작성 페이지입니다.']}
          subTitle={[
            '아기사자들을 위한 공지사항 작성 페이지입니다.',
            '되도록 수정하지 않는 것을 원칙으로 합니다.',
            <br />,
            '신중하게 작성해주세요!',
          ]}
        />
      )}

      {addOrEdit === 'edit' && (
        <HeadLine
          src={noticeImg}
          mainTitle={['공지 수정 페이지입니다.']}
          subTitle={[
            '아기사자들을 위한 공지사항 수정 페이지입니다.',
            '되도록 수정하지 않는 것을 원칙으로 합니다.',
            <br />,
            '어쩔 수 없이 수정했다면',
            '아기사자들이 혼란스러워하지 않도록 재공지해주세요.',
          ]}
        />
      )}

      <TitleContainer
        small
        mainTitle={['제목 작성']}
        subTitle={['공지의 주제를 잘 담고있는 제목으로 만들어 주세요.']}
        component={<InputBox input mainTitle />}
      />

      <Margin height='71' />
      <TitleContainer
        small
        mainTitle={['태그']}
        subTitle={['이번 공지는 무엇이랑 관련이 있나요? 주된 키워드를 작성해 주세요.']}
        component={<InputBox input mainTitle />}
      />

      <Margin height='76' />
      <StyledFlex flexCenter>
        <Typography pageTitle style={{ fontSize: '32px' }}>
          카테고리
        </Typography>
        <SelectCategoryButton setCategory={setCategory} />
      </StyledFlex>

      <Margin height='59' />
      <TitleContainer
        small
        mainTitle={['게시글 내용']}
        subTitle={['공지사항 게시글의 내용을 적어주세요.', '카카오톡 단체방에 올릴 내용을 동일하게 기입해주세요.']}
        component={<InputBox text detail />}
      />
      {addOrEdit === 'add' && <ArrowButtonContainer text='공지 생성 완료하기' />}
      {addOrEdit === 'edit' && <ArrowButtonContainer text='공지 수정 완료하기' />}
    </Layout>
  );
};

export default NoticeAddEdit;
