import styled from 'styled-components';
import Typography from '../Typography/Typography';

const ButtonContainer = styled.div`
  display: flex;
  width: 79px;
  justify-content: space-between;

  > p {
    cursor: pointer;
  }
`;

const TextButton = ({ haveDelete, children }) => (
  <>
    {haveDelete ? (
      <ButtonContainer>
        <Typography contentText color='gray'>
          수정
        </Typography>
        <Typography contentText color='lightRed'>
          삭제
        </Typography>
      </ButtonContainer>
    ) : (
      <Typography style={{ cursor: 'pointer' }} contentText color='gray'>
        {children}
      </Typography>
    )}
  </>
);

export default TextButton;
