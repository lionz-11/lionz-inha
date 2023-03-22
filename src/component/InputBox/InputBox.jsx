import { useRef, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill, BsFillXCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import Flex from '../Flex/Flex';
import theme from '../../assets/theme/Theme';

// textarea와 input 모든 경우를 전부 몰어넣어 코드가 복잡합니다.
// 아래의 예시를 참고하여 사용해주세요.

/*
      <InputBox input login placeholder='아이디' />
      -> 로그인 아이디 입력창
      <InputBox input login pw alert placeholder='비밀번호' />
      -> 로그인 비밀번호 입력 + 테두리 빨강
      <InputBox input search placeholder='검색어 입력' />
      -> 검색어 입력창
      <InputBox input mainTitle />
      -> 제목 입력창
      <InputBox input link />
      -> 깃허브 링크 입력창창
      <InputBox text detail />
      -> 큰 텍스트 입력창
      <InputBox text homework />
      -> 과제 내용 입력창
      <InputBox input editPassword />
      -> 비밀번호 수정창
*/

const types = {
  loginText: `
      font-family: 'pretendard-medium';
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.055em;
    `,

  login: `
      width: 525px;
      height: 69px;
      padding-left: 28px;
      padding-right: 28px;
      border-radius: 15px;
    `,

  search: `
      width: 647px;
      height: 54px;
    `,

  mainTitle: `
    width: 853px;
    height: 54px;
  `,

  link: `
    width: 853px;
    height: 50px;
  `,

  editPassword: `
    width: 450px;
    height: 54px;
  `,

  detail: `
    width: 853px;
    min-height: 277px;
  `,

  homework: `
    width: 853px;
    min-height: 120px;
  `,

  alert: `
    border: 1px solid #de6775;
    color: #de6775;
    ::placeholder {
      color: #de6775;
    }
  `,

  alertText: `
    color: #de6775;
    ::placeholder {
      color: #de6775;
    }
    `,
};

const InputWrapper = styled(Flex)`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #bfbfbf;
  padding-left: 19px;
  padding-right: 19px;
  ${(props) => props.login && types.login};
  ${(props) => props.search && types.search};
  ${(props) => props.mainTitle && types.mainTitle};
  ${(props) => props.link && types.link};
  ${(props) => props.editPassword && types.editPassword};
  ${(props) => props.alert && types.alert};
`;

const Input = styled.input`
  width: 100%;
  font-family: 'pretendard-regular';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.04em;
  :placeholder {
    color: #bfbfbf;
  }
  ${(props) => props.login && types.loginText};
  ${(props) => props.alert && types.alertText};
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
  overflow: hidden;
  :placeholder {
    color: #bfbfbf;
  }
  ${(props) => props.detail && types.detail};
  ${(props) => props.homework && types.homework};
  ${(props) => props.alert && types.alert};
`;

const StyledButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  ${(props) => props.theme.flex.flexCenter};
`;

const InputBox = ({
  onChange,
  value,
  input,
  login,
  pw,
  search,
  mainTitle,
  link,
  editPassword,
  text,
  detail,
  homework,
  alert,
  placeholder,
  onKeyUp,
}) => {
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const [viewPassword, setViewPassword] = useState(true);
  const [inputText, setInputText] = useState(null);

  const handleResizeHeight = () => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  const viewClicked = () => {
    setViewPassword(!viewPassword);
  };

  const writeText = () => {
    setInputText(inputRef.current.value);
  };

  const deleteText = () => {
    inputRef.current.value = null;
    setInputText(null);
  };

  return (
    <>
      {input ? (
        <InputWrapper flexCenter login={login} search={search} mainTitle={mainTitle} link={link} editPassword={editPassword} alert={alert}>
          <Input
            value={value}
            ref={inputRef}
            login={login}
            pw={pw}
            search={search}
            mainTitle={mainTitle}
            link={link}
            editPassword={editPassword}
            alert={alert}
            placeholder={placeholder}
            type={((editPassword && viewPassword) || pw) && 'password'}
            onChange={onChange}
            onKeyUp={onKeyUp}
          />
          {editPassword ? (
            <StyledButton onClick={viewClicked}>
              {viewPassword ? (
                <BsFillEyeFill size='24px' color={theme.colors.gray} />
              ) : (
                <BsFillEyeSlashFill size='24px' color={theme.colors.gray} />
              )}
            </StyledButton>
          ) : (
            ''
          )}
          {search && value ? (
            <StyledButton onClick={deleteText}>
              <BsFillXCircleFill size='20px' color={theme.colors.lightGray} />
            </StyledButton>
          ) : (
            ''
          )}
        </InputWrapper>
      ) : (
        ''
      )}
      {text ? (
        <Textarea ref={textRef} detail={detail} homework={homework} onKeyDown={handleResizeHeight} onKeyUp={handleResizeHeight} onChange={onChange}>
          {placeholder}
        </Textarea>
      ) : (
        ''
      )}
    </>
  );
};

export default InputBox;
