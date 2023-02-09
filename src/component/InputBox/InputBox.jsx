import { useRef } from 'react';
import styled from 'styled-components';
import Flex from '../Flex/Flex';

const types = {
  login: `
      width: 525px;
      height: 69px;
      padding-left: 28px;
      padding-right: 28px;
      border-radius: 15px;
      font-family: 'pretendard-medium';
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.055em;
    `,

  search: `
      width: 647px;
      height: 54px;
    `,

  title: `
    width: 853px;
    height: 54px;
  `,

  link: `
    width: 853px;
    height: 50px;
  `,

  detail: `
    width: 853px;
    min-height: 277px;
  `,

  alert: `
    border: 1px solid #de6775;
    color: #de6775;
    ::placeholder {
      color: #de6775;
    }
    `,
};

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #bfbfbf;
  font-family: 'pretendard-regular';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.04em;
  padding-left: 19px;
  padding-right: 19px;
  :placeholder {
    color: #bfbfbf;
  }
  ${(props) => props.login && types.login};
  ${(props) => props.search && types.search};
  ${(props) => props.title && types.title};
  ${(props) => props.link && types.link};
  ${(props) => props.alert && types.alert};
`;

const Textarea = styled.textarea`
  border-radius: 10px;
  border: 1px solid #bfbfbf;
  font-family: 'pretendard-regular';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.04em;
  padding: 17px 19px;
  resize: none;
  :placeholder {
    color: #bfbfbf;
  }
  ${(props) => props.detail && types.detail};
  ${(props) => props.alert && types.alert};
`;

const InputBox = ({ input, login, search, title, link, text, detail, alert, placeholder }) => {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = `${textarea.current.scrollHeight}`;
  };

  return (
    <Flex>
      {input ? <Input login={login} search={search} title={title} link={link} alert={alert} placeholder={placeholder} /> : ''}
      {text ? <Textarea detail={detail} onChangle={handleResizeHeight} /> : ''}
      <div>wefwe</div>
    </Flex>
  );
};

export default InputBox;
