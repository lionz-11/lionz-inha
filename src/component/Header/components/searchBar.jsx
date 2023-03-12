import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Margin from '../../Margin/Margin';
import Typography from '../../Typography/Typography';
import InputBox from '../../InputBox/InputBox';
import { Toast } from '../../Toast/Toast';

const Dimmer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
`;

const SearchWrapper = styled.div`
  width: 696px;
  height: 227px;
  position: fixed;
  top: -227px;
  border-radius: 0px 0px 17px 17px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 2;
  transition: 0.5s;
  ${(props) =>
    props.searchButton &&
    css`
      top: 0;
    `}

  p {
    margin-left: 33px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SearchBar = ({ searchButton, searchButtonClicked }) => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <>
      <AnimatePresence>
        {searchButton && <Dimmer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={searchButtonClicked} />}
      </AnimatePresence>
      <SearchWrapper searchButton={searchButton}>
        <Margin height={34} />
        <Typography pageTitle>키워드 검색</Typography>
        <Margin height={9} />
        <Typography contentText color='darkGray'>
          찾아보고 싶은 공지나 과제를 검색해서 간편하게 확인할 수 있어요. <br />
          글에 달린 태그로도 검색할 수 있답니다.
        </Typography>
        <Margin height={20} />
        <InputWrapper>
          <InputBox
            onKeyUp={handleKeyUp}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            input
            search
            placeholder='검색어 입력'
          />
        </InputWrapper>
      </SearchWrapper>
    </>
  );
};

export default SearchBar;
