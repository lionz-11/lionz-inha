import TitleSet from '../../component/TitleSet/TitleSet';
import noResult from './noResult.png';

const NoResult = () => (
  <>
    <TitleSet mainTitle={['검색 결과가 존재하지 않아요']} subTitle={['다른 검색어를 입력해 볼까요?']} />
    <img src={noResult} alt='noResult' />
  </>
);

export default NoResult;
