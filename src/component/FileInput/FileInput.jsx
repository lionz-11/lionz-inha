import styled from 'styled-components';
import Typography from '../Typography/Typography';

// const Label = styled.label.attrs({ htmlFor: 'file' })``;
const Title = styled(Typography)`
  ${({ theme }) => theme.font.contentText};
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

// 왜 id가 없으면 안되는지 모르겠음. id가 없어지면 input이 인식이 안된다.
const Input = styled.input.attrs({ type: 'file', id: 'file', accept: '.jpeg,.heif,.jpg,.png,.bmp' })`
  display: none;
`;

const FileInput = () => (
  <>
    <label htmlFor='file'>
      <Title>사진 업로드</Title>
    </label>
    <Input />
  </>
);

export default FileInput;
