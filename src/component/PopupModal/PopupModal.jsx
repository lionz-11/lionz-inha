import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Flex from '../Flex/Flex';
import Typography from '../Typography/Typography';
import Margin from '../Margin/Margin';
import ArrowButton from '../ArrowButton/ArrowButton';

const Dimmer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  overflow: hidden;
  transition: 0.5s;
`;

const ModalWrapper = styled.div`
  width: 600px;
  height: 180px;
  padding: 0px 33px;
  border-radius: 0px 0px 17px 17px;
  overflow: hidden;
  position: fixed;
  top: -200px;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 11;
  white-space: nowrap;
  display: hidden;
  visibility: hidden;
  flex-direction: column;
  transition: 0.5s;
  ${(props) =>
    props.modalActive &&
    css`
      display: flex;
      visibility: visible;
      top: 0px;
    `}
`;

const CancelButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.red};
  ${(props) => props.theme.font.contentText};
`;

const PopupModal = ({ mainTitle, subTitle, approve, approveComment, modalActive, setModalActive }) => (
  <>
    <AnimatePresence>
      {modalActive && <Dimmer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={setModalActive} />}
    </AnimatePresence>
    <ModalWrapper modalActive={modalActive}>
      <Margin height={20} />
      <Typography pageTitle>{mainTitle} </Typography>
      <Margin height={9} />
      <Typography contentText color='darkGray'>
        {subTitle}
      </Typography>
      <Margin height={35} />
      <Flex justify='space-between' style={{ width: '100%' }}>
        <CancelButton onClick={() => setModalActive(false)}>취소</CancelButton>
        <ArrowButton onClick={approve}>{approveComment}</ArrowButton>
      </Flex>
    </ModalWrapper>
  </>
);

export default PopupModal;
