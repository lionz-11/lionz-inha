import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoContentContainer from '../../component/PhotoContentBox/PhotoContentContainer';
import Layout from '../../component/Layout/Layout';
import BarComponentContainer from '../../component/BarComponentContainer/BarComponentContainer';
import BarContentBox from '../../component/BarContentBox/BarContentBox';
import SelectCategoryButton from '../../component/SelectCategoryButton/SelectCategoryButton';
import CountText from '../../component/CountText/CountText';
import TitleSet from '../../component/TitleSet/TitleSet';
import Header from '../../component/Header/Header';
import Margin from '../../component/Margin/Margin';

const a = [
  {
    title: 'hiㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴ',
    contents: 'contents',
    writer: 'writer',
    date: 'date',
  },
  {
    title: 'hi',
    contents: 'contenasdfasdasdsadasdfts',
    writer: 'writer',
    date: 'date',
  },
  {
    title: 'hi',
    contents: 'contenasdfasdasdsadasdfts',
    writer: 'writer',
    date: 'date',
  },
];

const tempData = [
  {
    title: '안녕',
    tag: 'FE',
    date: '010324',
  },
  {
    title: 'hihihihi',
    tag: 'BE',
    date: '010324',
  },
  {
    title: 'hihihihi',
    tag: 'ALL',
    date: '010324',
  },
  {
    title: 'hihihihi',
    tag: 'ALL',
    date: '010324',
  },
];

const HeadLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;

  div {
    margin-left: 0px;
  }

  padding: 0 20px;
`;

const HomeworkList = () => {
  const [category, setCategory] = useState('ALL');
  const [temp, setTemp] = useState(tempData);
  // const handleCategory = () => {};
  // useEffect(async () => {
  //   const response = await axios.get('https://lionz.kro.kr/member/img/1678277078161null20210221_121622.jpg', {
  //     headers: {
  //       Authorization:
  //         'Bearer ',
  //     },
  //   });
  //   console.log(response.data);
  // });

  // 카테고리 정렬
  useEffect(() => {
    setTemp(tempData.filter(({ tag }) => tag === category));
  }, [category]);

  return (
    <Layout>
      <Header />
      <Margin height='160' />
      <HeadLine>
        <TitleSet
          mainTitle={['나의 과제 목록입니다.']}
          subTitle={['우리 파트의 과제들이 있네요. 남은 반년동안 열심히 달려봐요! 화이팅(운영진 일동)']}
        />

        <CountText unit='ea' count={a.length} />
      </HeadLine>
      <PhotoContentContainer data={a} />

      {/* <HeadLine
      mainTitle={['다른 파트의 과제도 구경하고 싶다면..']}
      subTitle={['해커톤을 위해선 다른 파트의 이해도 중요합니다. 어떤 것들을 만들며 공부하고 있는지 알아볼까요?']}
    /> */}
      <Margin height='132' />

      <HeadLine>
        <TitleSet
          mainTitle={['다른 파트의 과제도 구경하고 싶다면..']}
          subTitle={['해커톤을 위해선 다른 파트의 이해도 중요합니다. 어떤 것들을 만들며 공부하고 있는지 알아볼까요?']}
        />

        <SelectCategoryButton setCategory={setCategory} />
      </HeadLine>
      <BarComponentContainer bars={temp} renderProp={(data) => <BarContentBox {...data} />} />
    </Layout>
  );
};

export default HomeworkList;
