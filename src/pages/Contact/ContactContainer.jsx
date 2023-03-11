import { AiFillCaretDown } from 'react-icons/ai';
import styled from 'styled-components';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';

const Container = styled.div`
  width: 100%;
  height: 593px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.skyBlue};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0px 14px;
`;

const ScrollContact = styled.div`
  width: 100%;
  height: 535px;

  overflow: auto;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const Contact = styled.div`
  padding: 0 27px;
  display: flex;
  height: 50px;
  width: 100%;
  background-color: ${(props) => (props.id % 2 === 0 ? props.theme.colors.backgroundBlue : props.theme.colors.white)};
  border-radius: 10px;
  align-items: center;
  gap: 27px;
  overflow: hidden;
`;

const SelectBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding-top: 24px;
  padding-bottom: 14px;
`;

const ProfileImage = styled.div`
  min-height: 29px;
  min-width: 29px;
  border-radius: 29px;
  background-color: pink;
`;

const InternalFragment = styled(Typography)`
  min-width: ${({ width }) => width}px;
  ${(props) => (props.bold ? props.theme.font.contentTitle : props.theme.font.contentText)}
  ${({ width }) => width || 'flex-grow: 1'};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Select = styled(Typography).attrs({ contentText: 'contentText', color: 'gray' })`
  margin-left: ${({ margin }) => margin}px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 7px;
`;

const ContactContainer = ({ data }) => (
  <Container>
    <SelectBar>
      <Select margin='83'>
        이름
        <AiFillCaretDown color='#bfbfbf' />
      </Select>
      <Select margin='62'>
        구분
        <AiFillCaretDown color='#bfbfbf' />
      </Select>
      <Select margin='177'>소개</Select>
    </SelectBar>
    <ScrollContact>
      {data.map((d, i) => (
        <Contact id={i}>
          <ProfileImage />
          <InternalFragment width='88' bold>
            {d.name}
          </InternalFragment>
          <InternalFragment width='200'>{d.distribution}</InternalFragment>
          <InternalFragment>{d.config}</InternalFragment>
        </Contact>
      ))}
    </ScrollContact>
    <Margin height='14' />
  </Container>
);

export default ContactContainer;
