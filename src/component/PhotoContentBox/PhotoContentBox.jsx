import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';
import ALL from '../../pages/Main/components/ALL.png';
import FE from '../../pages/Main/components/FE.png';
import BE from '../../pages/Main/components/BE.png';

// 캐러셀을 안썼으므로 3개까지만 예쁘게 보임
const Box = styled(motion.article)`
  width: 100%;
  max-width: 415px;
  min-width: calc(min(415px, 100vw - 40px));
  border-radius: 10px;
  ${(props) => props.theme.box}
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden; // 사진이 틀밖으로 나가지 않게한다.
  cursor: pointer;

  // 365
`;

// 사진을 넣을 컴포넌트! 임시로 만들어놨다.
const Photo = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56%;

  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainContent = styled.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
`;

const SideContent = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  justify-content: space-between;
  padding: 1rem 1.5rem;

  p {
    height: 1rem;
  }
`;

const Separator = styled.div`
  margin: 0 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.skyBlue};
`;

const Title = styled.h2`
  ${(props) => props.theme.font.contentTitle};
  padding-bottom: 1.1rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.theme.colors.black};
`;

const Contents = styled(Typography)`
  height: 2.3rem;
  overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PhotoContentBox = ({ data }) => {
  const navigate = useNavigate();
  const { title, explanation, target, deadline, id } = data;

  return (
    <Box whileHover={theme.animation.box} id={id} onClick={() => navigate(`/homework-info/${id}`)}>
      <Photo>
        {target === 'ALL' && <img src={ALL} alt='img' />}
        {target === 'FE' && <img src={FE} alt='img' />}
        {target === 'BE' && <img src={BE} alt='img' />}
      </Photo>
      <MainContent>
        <Title>{title}</Title>
        <Contents contentText>{explanation.replaceAll('(next_line)', ' ')}</Contents>
      </MainContent>
      <Separator />
      <SideContent>
        <Typography contentText>{target}</Typography>
        <Typography sideContentSmall color='gray'>
          {deadline}
        </Typography>
      </SideContent>
    </Box>
  );
};

export default PhotoContentBox;
