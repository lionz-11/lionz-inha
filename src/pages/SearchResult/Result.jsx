import styled from 'styled-components';
import TitleSet from '../../component/TitleSet/TitleSet';
import BarComponentContainer from '../../component/BarComponentContainer/BarComponentContainer';
import BarContentBox from '../../component/BarContentBox/BarContentBox';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 100px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

const Result = ({ data }) => {
  const { notice, homework } = data;

  return (
    <ResultContainer>
      {notice.length !== 0 && (
        <ResultWrapper>
          <TitleSet margin mainTitle={['공지']} subTitle={['검색 결과에 해당하는 공지 목록입니다.']} />
          <BarComponentContainer bars={notice} renderProp={(props) => <BarContentBox notification {...props} />} />
        </ResultWrapper>
      )}
      {homework.length !== 0 && (
        <ResultWrapper>
          <TitleSet margin mainTitle={['과제']} subTitle={['검색 결과에 해당하는 과제 목록입니다.']} />
          <BarComponentContainer bars={homework} renderProp={(props) => <BarContentBox {...props} />} />
        </ResultWrapper>
      )}
    </ResultContainer>
  );
};

export default Result;
