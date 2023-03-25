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

const TextButton = ({ haveDelete, children, color, onClick, onClickEdit, onClickDelete }) => (
  <>
    {haveDelete ? (
      <ButtonContainer>
        <Typography contentText color='gray' onClick={onClickEdit}>
          수정
        </Typography>
        <Typography contentText color='lightRed' onClick={onClickDelete}>
          삭제
        </Typography>
      </ButtonContainer>
    ) : (
      <Typography onClick={onClick} style={{ cursor: 'pointer' }} contentText color={color}>
        {children}
      </Typography>
    )}
  </>
);

export default TextButton;
