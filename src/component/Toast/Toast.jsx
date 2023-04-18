import toast from 'react-simple-toasts';
import styled from 'styled-components';

const StyledToast = styled.div`
  width: calc(min(339px, 100vw - 20px));
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(168, 172, 181, 0.8);
  border-radius: 14px;
  color: #ffffff;
  font-family: 'pretendard-semibold';
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
`;

export function Toast(message) {
  toast(message, {
    clickClosable: true,
    render: (m) => <StyledToast>{m}</StyledToast>,
  });
}

export default Toast;
