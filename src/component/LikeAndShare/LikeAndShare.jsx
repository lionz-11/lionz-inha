import styled from 'styled-components';
import { MdIosShare } from 'react-icons/md';
import theme from '../../assets/theme/Theme';
import Typography from '../Typography/Typography';

const Container = styled.div`
  width: 114px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeWrapper = styled.div`
  cursor: pointer;
  width: 78px;
  height: 30px;
  border-radius: 50px;
  margin-left: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  background-color: ${theme.colors.veryLightBlue};
  p {
    color: ${theme.colors.blue};
  }
`;

const Like = styled.div`
  padding-top: 3px;
  ${theme.flex.flexCenter};
  height: 24px;
  border-radius: 50px;
  width: 24px;
  background-color: ${theme.colors.white};
`;

const ShareWrapper = styled.div`
  ${theme.flex.flexCenter};
  cursor: pointer;
  height: 30px;
  border-radius: 50px;
  width: 30px;
  background-color: ${theme.colors.veryLightBlue};
`;

const LikeAndShare = ({ like, setLike }) => (
  <Container>
    <LikeWrapper onClick={setLike}>
      {like ? <Like>🦁</Like> : <Like>🐾</Like>}
      <Typography sideContentSmall>324</Typography>
    </LikeWrapper>
    <ShareWrapper>
      <MdIosShare size='16' color={theme.colors.blue} style={{ marginBottom: '2px' }} />
    </ShareWrapper>
  </Container>
);

export default LikeAndShare;
